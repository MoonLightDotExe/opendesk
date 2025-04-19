import React, { useEffect, useState, useContext } from 'react'
import ReactPaginate from 'react-paginate'
import {
  KinesisVideoClient,
  GetDataEndpointCommand,
} from '@aws-sdk/client-kinesis-video'
import {
  KinesisVideoArchivedMediaClient,
  GetHLSStreamingSessionURLCommand,
} from '@aws-sdk/client-kinesis-video-archived-media'
import Header from '../../shared/Header/Header'
import next from '../../assets/next.png'
import previous from '../../assets/previous.png'

import ReactPlayer from 'react-player'
import { RxEnterFullScreen } from 'react-icons/rx'
import { PiPlayPause } from 'react-icons/pi'

import './MultiVideo.css'
import mainContext from '../../context/main'

function Items({ cameras, urls }) {
  return (
    <>
      {cameras &&
        cameras.map((camera, index) => {
          const cameraUrl = urls.find((url) => url.name === camera.name)?.url

          return (
            <div
              key={index}
              className='grid-item'
            >
              {cameraUrl ? (
                <ReactPlayer
                  url={cameraUrl}
                  playing
                  controls
                  muted
                  width='42.5vw'
                  height='35vh'
                />
              ) : (
                <p>Loading stream...</p>
              )}
              <div className='multi-popup'>
                <div className='multi-popup--pause'>
                  <PiPlayPause color='black' />
                </div>
                <div className='multi-popup--fullscreen'>
                  <RxEnterFullScreen color='black' />
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

function MultiVideo() {
  const [itemOffset, setItemOffset] = useState(0)
  const [urls, setUrls] = useState([])
  const { getActiveCameras, activeCameras } = useContext(mainContext)

  const itemsPerPage = 4
  const credentials = {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_SECRET_KEY,
  }

  const region = 'us-east-1'

  useEffect(() => {
    getActiveCameras()
  }, [])

  useEffect(() => {
    if (!activeCameras || activeCameras.length === 0) return

    const fetchStreamUrls = async () => {
      const tempUrls = []

      for (const camera of activeCameras) {
        try {
          const videoClient = new KinesisVideoClient({ region, credentials })

          const endpointResponse = await videoClient.send(
            new GetDataEndpointCommand({
              StreamName: camera.name,
              APIName: 'GET_HLS_STREAMING_SESSION_URL',
            })
          )

          const hlsClient = new KinesisVideoArchivedMediaClient({
            region,
            credentials,
            endpoint: endpointResponse.DataEndpoint,
          })

          const hlsResponse = await hlsClient.send(
            new GetHLSStreamingSessionURLCommand({
              StreamName: camera.name,
              PlaybackMode: 'LIVE',
              HLSFragmentSelector: {
                FragmentSelectorType: 'SERVER_TIMESTAMP',
              },
              Expires: 3600,
            })
          )

          tempUrls.push({
            name: camera.name,
            url: hlsResponse.HLSStreamingSessionURL,
          })
        } catch (err) {
          console.error(`Error fetching stream for ${camera.name}:`, err)
        }
      }

      setUrls(tempUrls)
    }

    fetchStreamUrls()
  }, [activeCameras])

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage
    setItemOffset(newOffset)
  }

  const currentCameras = Array.isArray(activeCameras)
    ? activeCameras.slice(itemOffset, itemOffset + itemsPerPage)
    : []

  const pageCount = Array.isArray(activeCameras)
    ? Math.ceil(activeCameras.length / itemsPerPage)
    : 0

  return (
    <>
      <Header />
      <div className='multi-container'>
        <div className='grid-container'>
          <Items
            cameras={currentCameras}
            urls={urls}
          />
        </div>

        {Array.isArray(activeCameras) &&
          activeCameras.length > itemsPerPage && (
            <ReactPaginate
              breakLabel='...'
              nextLabel={
                <img
                  src={next}
                  alt='Next'
                  style={{ width: '40px', height: '40px' }}
                />
              }
              previousLabel={
                <img
                  src={previous}
                  alt='Previous'
                  style={{ width: '40px', height: '40px' }}
                />
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              containerClassName='pagination'
              pageClassName='page-item'
              pageLinkClassName='page-link'
              previousClassName='previous-item'
              previousLinkClassName='previous-link'
              nextClassName='next-item'
              nextLinkClassName='next-link'
              breakClassName='break-item'
              breakLinkClassName='break-link'
              activeClassName='active'
            />
          )}
      </div>
    </>
  )
}

export default MultiVideo
