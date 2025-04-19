const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const cameraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
})

module.exports = mongoose.model('cameras', cameraSchema)
