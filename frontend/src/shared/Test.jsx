import React, { useEffect, useState, useContext } from 'react'
import ReactPlayer from 'react-player'
import { Box } from '@chakra-ui/react'
import {
  KinesisVideoClient,
  GetDataEndpointCommand,
} from '@aws-sdk/client-kinesis-video'
import {
  KinesisVideoArchivedMediaClient,
  GetHLSStreamingSessionURLCommand,
} from '@aws-sdk/client-kinesis-video-archived-media'
import mainContext from '../context/main'

function Test() {
  const [urls, setUrls] = useState([])
  const { getActiveCameras, activeCameras } = useContext(mainContext)

  const region = 'us-east-1'
  const credentials = {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_SECRET_KEY,
  }

  useEffect(() => {
    getActiveCameras()
  }, [])

  useEffect(() => {
    if (!activeCameras || activeCameras.length === 0) return

    const fetchAllStreams = async () => {
      const tempUrls = []

      for (const c of activeCameras) {
        try {
          const videoClient = new KinesisVideoClient({ region, credentials })

          const endpointResponse = await videoClient.send(
            new GetDataEndpointCommand({
              StreamName: c.name,
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
              StreamName: c.name, // use the current camera's name
              PlaybackMode: 'LIVE',
              HLSFragmentSelector: {
                FragmentSelectorType: 'SERVER_TIMESTAMP',
              },
              Expires: 3600,
            })
          )

          tempUrls.push({
            name: c.name,
            url: hlsResponse.HLSStreamingSessionURL,
          })
        } catch (err) {
          console.error(`Error fetching stream for ${c.name}:`, err)
        }
      }

      setUrls(tempUrls)
    }

    fetchAllStreams()
  }, [activeCameras])

  return (
    <Box
      display='flex'
      flexWrap='wrap'
      gap='20px'
      justifyContent='center'
    >
      {urls.length === 0 ? (
        <p>Loading streams...</p>
      ) : (
        urls.map((c, i) => (
          <Box
            key={i}
            width='45vw'
          >
            <p>{c.name}</p>
            <ReactPlayer
              url={c.url}
              playing
              muted
              controls
              width='100%'
              height='auto'
            />
          </Box>
        ))
      )}
    </Box>
  )
}

export default Test
