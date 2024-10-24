const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const cameraSchema = new mongoose.Schema({
  rank: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  adjacencyList: [
    {
      id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'cameras',
      },
      rank: {
        type: String,
        required: true,
      },
    },
  ],
})

module.exports = mongoose.model('cameras', cameraSchema)
