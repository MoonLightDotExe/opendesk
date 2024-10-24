const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const employees = require('../models/employees.models.js')

const self = (module.exports = {
  getEmployeeData: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const employeeData = await employees.find({})
        console.log(employeeData)
        resolve(employeeData)
      } catch (err) {
        reject(err)
      }
    })
  },
})
