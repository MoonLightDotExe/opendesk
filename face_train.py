import os
import face_recognition
import numpy as np
import pickle

DIR = r'D:\opendesk\downloaded_images'

known_encodings = []
known_labels = []


def create_train():
    people = os.listdir(DIR)
    for person in people:
        path = os.path.join(DIR, person)
        label = people.index(person)

        for img in os.listdir(path):
            img_path = os.path.join(path, img)


<< << << < HEAD
  img_array = cv.imread(img_path)
   gray = cv.cvtColor(img_array, cv.COLOR_BGR2GRAY)

    faces_rect = haar_cascades.detectMultiScale(
        gray, scaleFactor=1.1, minNeighbors=4)

    for (x, y, w, h) in faces_rect:
        faces_roi = gray[y:y + h, x:x + w]
        features.append(faces_roi)
        labels.append(label)

== == == =
  print(f"Processing {img_path}")

   img_array = face_recognition.load_image_file(img_path)

    face_locations = face_recognition.face_locations(img_array)
    face_encodings = face_recognition.face_encodings(img_array, face_locations)

    for face_encoding in face_encodings:
        known_encodings.append(face_encoding)
        known_labels.append(label)

>>>>>> > acf89b8a29e7b4d998ee7aca937f7c5ab7ce5b34
  print('----------- TRAINING DONE -----------')

   with open('face_encodings.pkl', 'wb') as f:
        pickle.dump(known_encodings, f)

    with open('face_labels.pkl', 'wb') as f:
        pickle.dump(known_labels, f)

    print(f'Total Faces Encoded: {len(known_encodings)}')
    print(f'Total Labels: {len(known_labels)}')


if __name__ == '__main__':
    create_train()
