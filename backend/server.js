const express = require('express')
const dotenv = require('dotenv').config()
const AWS = require('aws-sdk')
const bodyParser = require('body-parser')
const http = require('http')
const socketIO = require('socket.io')
const testingRepository = require('./repository/testing.repository')
const dataRepository = require('./repository/data.repository')
const cors = require('cors')

const connectDB = require('./config/db.config')

const authRouter = require('./routes/auth.routes')
const workerRouter = require('./routes/worker.routes')
const dataRouter = require('./routes/data.routes')

const PORT = process.env.PORT || 5000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
)

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1',
})

const s3 = new AWS.S3()
app.use(express.json({ limit: '50mb' }))

// WebSocket Connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id)

  // Handle Performance Estimation Messages
  socket.on('message', (data) => {
    testingRepository.performanceEstimation(data)
    socket.emit('response', 'Received your message: ' + data)
  })

  // New WebSocket Event for Pushing Data to MongoDB
  socket.on('push_data', async (data) => {
    try {
      console.log('Received Data for MongoDB:', data)

      await dataRepository.commitData(data)
      console.log('Data saved to MongoDB')

      socket.emit('data_saved', { message: 'Data successfully stored!' })
    } catch (error) {
      console.error('Error saving data:', error)
      socket.emit('error', { message: 'Failed to store data!' })
    }
  })

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id)
  })
})

// Upload to S3
app.post('/api/upload', (req, res) => {
  const { imageData, folder } = req.body
  console.log('Received upload request:', req.body)
  if (!imageData || !folder) {
    return res.status(400).json({ error: 'Missing imageData or folder' })
  }

  const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '')
  const buffer = Buffer.from(base64Data, 'base64')

  const params = {
    Bucket: 'opendesk',
    Key: `${folder}/webcam-frame-${Date.now()}.png`,
    Body: buffer,
    ContentEncoding: 'base64',
    ContentType: 'image/png',
  }

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading to S3:', err)
      return res.status(500).json({ error: 'Error uploading to S3' })
    }

    console.log('Upload success:', data)
    res.status(200).json({ message: 'Frame uploaded successfully', data })
  })
})

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '30mb', extended: true }))

connectDB()

app.use(authRouter)
app.use(workerRouter)
app.use(dataRouter)

server.listen(PORT, () => {
  console.log(`Server Listening on Port: ${PORT}`)
})
