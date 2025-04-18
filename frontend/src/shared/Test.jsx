import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Box, Flex } from '@chakra-ui/react'
import {
  KinesisVideoClient,
  GetDataEndpointCommand,
} from '@aws-sdk/client-kinesis-video'
import {
  KinesisVideoArchivedMediaClient,
  GetHLSStreamingSessionURLCommand,
} from '@aws-sdk/client-kinesis-video-archived-media'

function Test() {
  const [url, setUrl] = useState(null)
  const streamName = 'camera-set-1'
  const region = 'us-east-1'

  useEffect(() => {
    const getStreamUrl = async () => {
      const credentials = {
        accessKeyId: '',
        secretAccessKey: '',
      }

      // Step 1: Get Data Endpoint
      const videoClient = new KinesisVideoClient({ region, credentials })
      const endpointResponse = await videoClient.send(
        new GetDataEndpointCommand({
          StreamName: streamName,
          APIName: 'GET_HLS_STREAMING_SESSION_URL',
        })
      )

      const hlsClient = new KinesisVideoArchivedMediaClient({
        region,
        credentials,
        endpoint: endpointResponse.DataEndpoint,
      })

      // Step 2: Get HLS URL
      const hlsResponse = await hlsClient.send(
        new GetHLSStreamingSessionURLCommand({
          StreamName: streamName,
          PlaybackMode: 'LIVE',
          HLSFragmentSelector: {
            FragmentSelectorType: 'SERVER_TIMESTAMP',
          },
          Expires: 3600,
        })
      )

      setUrl(hlsResponse.HLSStreamingSessionURL)
    }

    getStreamUrl().catch((err) => console.error('Error fetching stream:', err))
  }, [])

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={'4rem'}
    >
      {url ? (
        <ReactPlayer
          url={url}
          playing
          controls
          width='50vw'
          height='auto'
        />
      ) : (
        <p>Loading stream...</p>
      )}
    </Box>
  )
}

export default Test
