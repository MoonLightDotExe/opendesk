const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const employees = require('../models/employees.models.js')

const self = (module.exports = {
  performanceEstimation: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const employee = await employees.findOne({ _id: body.id })
        if (body.control == 1) {
          const report1 = employee.dailyReports.push({
            date: body.date,
          })
          await employee.save()
          let _id
          const report = employee.dailyReports.map((report) => {
            console.log(report)
            if (report.control_id == body.control_id) {
              _id = report._id
            }
          })
          console.log(_id)
          resolve(_id)
        }
      } catch (err) {
        reject(err)
      }
    })
  },
})
