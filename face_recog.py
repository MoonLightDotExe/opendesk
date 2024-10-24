import os
import cv2 as cv
import face_recognition
import numpy as np
import pickle

DIR = r'D:\opendesk\downloaded_images'

with open('face_encodings.pkl', 'rb') as f:
    known_encodings = pickle.load(f)

with open('face_labels.pkl', 'rb') as f:
    known_labels = pickle.load(f)

people = os.listdir(DIR)
print(people)

capture = cv.VideoCapture(0)

while True:
    isTrue, frame = capture.read()
    rgb_frame = cv.cvtColor(frame, cv.COLOR_BGR2RGB)

    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

    for (top, right, bottom, left), face_encoding in zip(face_locations, face_encodings):
        
        matches = face_recognition.compare_faces(known_encodings, face_encoding)
        face_distances = face_recognition.face_distance(known_encodings, face_encoding)
        
        best_match_index = np.argmin(face_distances)

        if matches[best_match_index]:
            label = known_labels[best_match_index]
            name = people[label]
            confidence = 1 - face_distances[best_match_index]
            print(f'Label: {name} with a Confidence: {confidence:.2f}')
            
            cv.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)
            cv.putText(frame, f'{name} ({confidence:.2f})', (left, top - 10), cv.FONT_HERSHEY_COMPLEX, 0.8, (0, 255, 0), 2)
        else:
            print("Unknown face")
            cv.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
            cv.putText(frame, "Unknown", (left, top - 10), cv.FONT_HERSHEY_COMPLEX, 0.8, (0, 0, 255), 2)

    cv.imshow('Video', frame)

    if cv.waitKey(20) & 0xFF == ord('d'):
        break

capture.release()
cv.destroyAllWindows()
