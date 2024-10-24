import os
import cv2 as cv
import numpy as np

DIR = r'C:\Users\JIGISHA GHANEKAR\Desktop\majorP\opendesk\downloaded_images'
haar_cascades = cv.CascadeClassifier('haar_face.xml')

features = []
labels = []


def create_train():
    people = os.listdir(DIR)
    for person in people:
        path = os.path.join(DIR, person)
        label = people.index(person)

        for img in os.listdir(path):
            img_path = os.path.join(path, img)
            img_array = cv.imread(img_path)
            gray = cv.cvtColor(img_array, cv.COLOR_BGR2GRAY)

            faces_rect = haar_cascades.detectMultiScale(
                gray, scaleFactor=1.1, minNeighbors=4)

            for (x, y, w, h) in faces_rect:
                faces_roi = gray[y:y + h, x:x + w]
                features.append(faces_roi)
                labels.append(label)

    print('----------- TRAINING DONE -----------')

    features_array = np.array(features, dtype='object')
    labels_array = np.array(labels)

    print(f'Length of Features: {len(features_array)}')
    print(f'Length of Labels: {len(labels_array)}')

    face_recognizer = cv.face.LBPHFaceRecognizer_create()

    face_recognizer.train(features_array, labels_array)

    face_recognizer.save('faces_trained.yml')
    np.save('features.npy', features_array)
    np.save('labels.npy', labels_array)


if __name__ == '__main__':
    create_train()
