from flask import Flask, request
import boto3
import os
from dotenv import load_dotenv
import cv2 as cv
import numpy as np
from face_train import create_train

load_dotenv()

app = Flask(__name__)

S3_BUCKET = 'opendesk'
S3_REGION = 'us-east-1'
AWS_ACCESS_KEY = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')

s3_client = boto3.client(
    's3',
    region_name=S3_REGION,
    aws_access_key_id=AWS_ACCESS_KEY,
    aws_secret_access_key=AWS_SECRET_KEY
)

LOCAL_FOLDER = 'downloaded_images'

if not os.path.exists(LOCAL_FOLDER):
    os.makedirs(LOCAL_FOLDER)

@app.route('/download-images', methods=['POST'])
def download_images():
    try:
        data = request.get_json()
        S3_FOLDER_PREFIX = data['name']
        response = s3_client.list_objects_v2(Bucket=S3_BUCKET, Prefix=S3_FOLDER_PREFIX)

        if 'Contents' not in response:
            return "No images found in the specified folder.", 404

        downloaded_count = 0
        for item in response['Contents']:
            file_name = item['Key']
            if file_name.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp')):
                local_file_path = os.path.join(LOCAL_FOLDER, file_name)
                local_dir = os.path.dirname(local_file_path)

                if not os.path.exists(local_dir):
                    os.makedirs(local_dir)

                s3_client.download_file(S3_BUCKET, file_name, local_file_path)
                downloaded_count += 1

        create_train()

        print(f"Downloaded {downloaded_count} images to '{LOCAL_FOLDER}' and processed them.")

        return 'Completed'
    
    except Exception as e:
        return str(e), 500

if __name__ == '__main__':
    app.run(debug=True)
