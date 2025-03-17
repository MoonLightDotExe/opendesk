const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const dailySchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'Name is Required!'],
  },
  date: {
    type: String,
    required: [true, 'Date is Required!'],
  },
  data: [
    {
      field: {
        type: String,
        required: [true, 'Field Name is required'],
      },
      occurences: {
        type: Number,
        required: [true],
      },
    },
  ],
})

module.exports = mongoose.model('dailies', dailySchema)
