import cv2
import skvideo.io
import numpy as np

# Output file path for saving the video
output_file = "webcam_output.h264"  # Or change to .mp4 if you prefer

# Set up FFmpeg writer via skvideo
writer = skvideo.io.FFmpegWriter(
    output_file,
    outputdict={
        '-vcodec': 'libx264',  # Video codec
        '-f': 'h264'  # Format as raw H.264 video stream
    }
)

# OpenCV webcam capture
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

if not cap.isOpened():
    print("[ERROR] Cannot open webcam")
    exit()

print("[INFO] Recording from webcam... Press Ctrl+C to stop.")

try:
    while True:  # Continuously capture frames
        ret, frame = cap.read()
        if not ret or frame is None:
            print("[WARNING] Skipping empty frame")
            continue

        # Convert frame to RGB as required by skvideo
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Write the frame to the FFmpeg writer
        writer.writeFrame(frame_rgb)

except KeyboardInterrupt:
    print("\n[INFO] Interrupted. Cleaning up...")

finally:
    cap.release()
    writer.close()
    print(f"[INFO] Saved raw H264 video to: {output_file}")
