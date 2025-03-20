const mongoose = require('mongoose')

const servicesSchema = new mongoose.Schema({
  name: {
    type: 'String',
    required: [true, 'Name of service is required!'],
  },
  type: {
    type: 'Number', // 0 is Safe/productive, 1 is safe/unproductive, 2 is unsafe, 3 is unknown
    requrired: [true, 'Type of service is required!'],
  },
})

module.exports = mongoose.model('services', servicesSchema)
