const mongoose = require('mongoose')

const managerSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  email: {
    type: String,
    required: [true, 'Please Enter Email'],
  },
  password: {
    type: String,
    required: [true, 'Please Enter Password'],
  },
  rank: {
    type: String,
    required: true,
  },
  employees: [
    {
      employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees',
      },
      employee_name: {
        type: String,
        required: true,
      },
      rank: {
        type: String,
        // required: true,
      },
    },
  ],
  cameras: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cameras',
      },
      rank: {
        type: String,
        required: true,
      },
    },
  ],
})

module.exports = mongoose.model('managers', managerSchema)
