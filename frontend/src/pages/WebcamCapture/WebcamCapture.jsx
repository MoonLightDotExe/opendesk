import { useState } from 'react'
import './WebcamCapture.css'
import Webcam from 'react-webcam'

const WebcamCapture = () => {
  const [playing, setPlaying] = useState(false)

  const HEIGHT = 800
  const WIDTH = 600

  const startVideo = () => {
    setPlaying(true)
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName('videofield')[0]
        if (video) {
          video.srcObject = stream
        }
      },
      (err) => console.error(err)
    )
  }

  const stopVideo = () => {
    setPlaying(false)
    let video = document.getElementsByClassName('videofield')[0]
    video.srcObject.getTracks()[0].stop()
  }

  return (
    <>
      <h1 className='title'>Monitor Employees</h1>
      <div className='webcam-capture'>
        <video
          src=''
          height={HEIGHT}
          width={WIDTH}
          muted
          autoPlay
          className='videofield'
        ></video>
      </div>
      <div className='app_input'>
        {playing ? (
          <button
            onClick={stopVideo}
            className='web-button'
          >
            Stop
          </button>
        ) : (
          <button
            onClick={startVideo}
            className='web-button'
          >
            Start
          </button>
        )}
      </div>
    </>
  )
}

export default WebcamCapture
