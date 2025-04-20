import boto3
import cv2
import numpy as np
import subprocess
import threading
import pickle
import os
import face_recognition
from datetime import datetime

# Config
STREAM_NAME = "camera-set-1"
REGION = "us-east-1"
DATASET_DIR = r"D:\opendesk\downloaded_images"
ENCODINGS_PATH = "face_encodings.pkl"
LABELS_PATH = "face_labels.pkl"
PROCESS_EVERY_N = 10
LOG_FILE = "detected_people.txt"

# Load encodings and labels
with open(ENCODINGS_PATH, 'rb') as f:
    known_encodings = pickle.load(f)
with open(LABELS_PATH, 'rb') as f:
    known_labels = pickle.load(f)

people = os.listdir(DATASET_DIR)
print("People in dataset:", people)

# Open the file for logging (append mode)
log_file = open(LOG_FILE, "a")

# Get Kinesis media endpoint
kvs_client = boto3.client("kinesisvideo", region_name=REGION)
endpoint = kvs_client.get_data_endpoint(StreamName=STREAM_NAME, APIName="GET_MEDIA")['DataEndpoint']
media_client = boto3.client("kinesis-video-media", endpoint_url=endpoint, region_name=REGION)
response = media_client.get_media(StreamName=STREAM_NAME, StartSelector={"StartSelectorType": "NOW"})

# Start FFmpeg subprocess to convert video to raw frames
ffmpeg = subprocess.Popen([
    'ffmpeg', '-i', 'pipe:0',
    '-f', 'image2pipe', '-pix_fmt', 'bgr24', '-vcodec', 'rawvideo', '-'
], stdin=subprocess.PIPE, stdout=subprocess.PIPE)

# Feed FFmpeg in background
def feed_ffmpeg():
    for chunk in response['Payload'].iter_chunks():
        try:
            ffmpeg.stdin.write(chunk)
        except BrokenPipeError:
            break

threading.Thread(target=feed_ffmpeg, daemon=True).start()

# Read frames
def read_frames(width=320, height=240):
    frame_size = width * height * 3
    while True:
        raw = ffmpeg.stdout.read(frame_size)
        if not raw:
            break
        frame = np.frombuffer(raw, np.uint8).copy().reshape((height, width, 3))
        yield frame

# Process feed
frame_count = 0

for frame in read_frames():
    frame_count += 1

    # Show the live video feed
    cv2.imshow("Live Feed", frame)

    # Run recognition every Nth frame
    if frame_count % PROCESS_EVERY_N == 0:
        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)
        rgb_small = cv2.cvtColor(small_frame, cv2.COLOR_BGR2RGB)
        face_locations = face_recognition.face_locations(rgb_small, model="hog")
        face_encodings = face_recognition.face_encodings(rgb_small, face_locations)

        for face_encoding in face_encodings:
            face_distances = face_recognition.face_distance(known_encodings, face_encoding)
            best_match_index = np.argmin(face_distances)
            confidence = 1 - face_distances[best_match_index]

            if face_recognition.compare_faces([known_encodings[best_match_index]], face_encoding)[0]:
                name = people[known_labels[best_match_index]]
                label = f"{name} ({confidence:.2f})"
            else:
                label = "Unknown"

            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            log_entry = f"[{timestamp}] Detected: {label}"
            print(log_entry)
            log_file.write(log_entry + "\n")
            log_file.flush()

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
log_file.close()
