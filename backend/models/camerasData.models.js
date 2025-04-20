const mongoose = require('mongoose')

const cameraDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    data: [String],
    date: { type: String, required: true },
  },
  { collection: 'camerasData' }
)

const camerasData = mongoose.model('camerasData', cameraDataSchema)

module.exports = camerasData
