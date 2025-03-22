const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const employeeSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: [true, 'Employee ID is required!'],
  },
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
  clearance: {
    type: String,
    required: true,
  },
  projects: [
    {
      project_id: {
        type: String,
        required: [true, 'Project ID is required!'],
      },
      project_name: {
        type: String,
        required: [true, 'Project Name is required!'],
      },
    },
  ],
  biometrics: [
    {
      type: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
  manager: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'managers',
  },
  dailyReports: [
    {
      date: {
        type: Date,
        required: true,
      },
      performanceData: {
        type: String,
      },
      data: {
        type: String,
      },
    },
  ],
})

module.exports = mongoose.model('employees', employeeSchema)
