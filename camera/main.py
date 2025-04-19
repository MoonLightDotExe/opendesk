import boto3
import cv2
import numpy as np
import subprocess
import threading
import pickle
import os
import face_recognition

STREAM_NAME = "camera-set-2"
REGION = "us-east-1"
DATASET_DIR = r"D:\opendesk\downloaded_images"
MODEL_ENCODING_PATH = "face_encodings.pkl"
MODEL_LABELS_PATH = "face_labels.pkl"

# Load known encodings and labels
with open(MODEL_ENCODING_PATH, 'rb') as f:
    known_encodings = pickle.load(f)

with open(MODEL_LABELS_PATH, 'rb') as f:
    known_labels = pickle.load(f)

people = os.listdir(DATASET_DIR)
print("People in dataset:", people)

# Step 1: Get the media endpoint
kvs_client = boto3.client("kinesisvideo", region_name=REGION)
endpoint = kvs_client.get_data_endpoint(StreamName=STREAM_NAME, APIName="GET_MEDIA")['DataEndpoint']

# Step 2: Get media payload from stream
media_client = boto3.client("kinesis-video-media", endpoint_url=endpoint, region_name=REGION)
response = media_client.get_media(StreamName=STREAM_NAME, StartSelector={"StartSelectorType": "NOW"})

# Step 3: Launch FFmpeg to convert to raw video frames
ffmpeg = subprocess.Popen([
    'ffmpeg',
    '-i', 'pipe:0',
    '-f', 'image2pipe',
    '-pix_fmt', 'bgr24',
    '-vcodec', 'rawvideo',
    '-'
], stdin=subprocess.PIPE, stdout=subprocess.PIPE)

# Step 4: Feed chunks to FFmpeg in a thread
def feed_ffmpeg():
    for chunk in response['Payload'].iter_chunks():
        try:
            ffmpeg.stdin.write(chunk)
        except BrokenPipeError:
            break

threading.Thread(target=feed_ffmpeg, daemon=True).start()

# Step 5: Read and process frames
def read_frames(width=320, height=240):
    frame_size = width * height * 3
    while True:
        raw = ffmpeg.stdout.read(frame_size)
        if not raw:
            break
        frame = np.frombuffer(raw, np.uint8).copy().reshape((height, width, 3))

        yield frame

# Step 6: Face recognition loop
frame_count = 0
process_every_n = 100  # Process every Nth frame to save compute

for frame in read_frames():
    frame_count += 1
    label = "Detecting..."

    if frame_count % process_every_n == 0:
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        face_locations = face_recognition.face_locations(rgb_frame)
        face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

        for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
            matches = face_recognition.compare_faces(known_encodings, face_encoding)
            face_distances = face_recognition.face_distance(known_encodings, face_encoding)
            best_match_index = np.argmin(face_distances)

            if matches[best_match_index]:
                name = people[known_labels[best_match_index]]
                confidence = 1 - face_distances[best_match_index]
                label = f"{name} ({confidence:.2f})"
                color = (0, 255, 0)
            else:
                label = "Unknown"
                color = (0, 0, 255)

            # Draw box and label
            cv2.rectangle(frame, (left, top), (right, bottom), color, 2)
            cv2.putText(frame, label, (left, top - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, color, 2)

        print(label)

    cv2.imshow("Face Recognition", frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cv2.destroyAllWindows()
