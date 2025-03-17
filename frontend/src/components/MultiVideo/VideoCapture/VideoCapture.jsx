import React from 'react'
import './VideoCapture.css'

function VideoCapture() {
  return (
    <div className='VideoCapture-container'>
        <div className='VideoCapture'>
            <p>#Video 1</p>
        </div>
        <div className='VideoCapture-button'>
            <button className='VideoCapture-btncapture'>
                CAPTURE
                </button>
                <button className='VideoCapture-btnrecapture'>
                    RECAPTURE
                </button>
        </div>
        <div className='VideoCapture-submit'>
            <button className='VideoCapture-btnsubmit'>
                SUBMIT
            </button>
        </div>
    </div>
  )
}

export default VideoCapture
