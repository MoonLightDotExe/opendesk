import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'

const WebcamCapture = () => {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [capturing, setCapturing] = useState(false)
  const [folderName, setFolderName] = useState('')

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        console.log('Webcam stream started:', stream)
      })
      .catch((err) => {
        console.error('Error accessing webcam:', err)
      })
  }, [])

  const startCapture = () => {
    setCapturing(true)
    const newFolderName = 'Jigisha'
    setFolderName(newFolderName)

    const captureInterval = setInterval(() => {
      captureFrame(newFolderName)
    }, 1000)

    setTimeout(() => {
      clearInterval(captureInterval)
      setCapturing(false)
      alert('Stopped capturing after 10 seconds')
    }, 10000)
  }

  const captureFrame = async (folder) => {
    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    const imageData = canvas.toDataURL('image/png')
    console.log('Captured image data:', imageData)

    try {
      await axios.post(
        'http://localhost:5000/api/upload',
        { imageData, folder },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      console.log('Frame uploaded successfully!')
    } catch (err) {
      console.error('Upload failed:', err)
    }
  }

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        width='640'
        height='480'
      ></video>
      <canvas
        ref={canvasRef}
        width='640'
        height='480'
        style={{ display: 'none' }}
      ></canvas>
      <button
        onClick={startCapture}
        disabled={capturing}
      >
        {capturing ? 'Capturing...' : 'Start Capture'}
      </button>
    </div>
  )
}

export default WebcamCapture
