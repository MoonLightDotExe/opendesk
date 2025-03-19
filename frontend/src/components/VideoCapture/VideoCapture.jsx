import React, { useRef, useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../../shared/Header/Header'

import './VideoCapture.css'
import { Input } from '@chakra-ui/react'

function VideoCapture() {
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [capturing, setCapturing] = useState(false)
  const [folderName, setFolderName] = useState('')
  const [name, setName] = useState('')

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
    // const newFolderName = `Sammy`
    // setFolderName(newFolderName)

    const captureInterval = setInterval(() => {
      captureFrame(name)
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

  const handleChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  return (
    <>
      <Header />
      <div className='VideoCapture-container'>
        <div className='VideoCapture'>
          <video
            ref={videoRef}
            autoPlay
            width='640'
            height='480'
            style={{ borderRadius: '5px' }}
          ></video>
          <canvas
            ref={canvasRef}
            width='640'
            height='480'
            style={{ display: 'none' }}
          ></canvas>
        </div>
        <div className='VideoCapture-inputfield'>
          <Input
            className='input-field'
            placeholder='Name'
            width='20rem'
            border='2px solid black'
            marginTop='1rem'
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className='VideoCapture-button'>
          <button
            className='VideoCapture-btncapture'
            onClick={startCapture}
          >
            CAPTURE
          </button>
          {/* <button className='VideoCapture-btnrecapture'>RECAPTURE</button> */}
        </div>
        <div className='VideoCapture-submit'>
          {/* <button className='VideoCapture-btnsubmit'>SUBMIT</button> */}
        </div>
      </div>
    </>
  )
}

export default VideoCapture
