const dotenv = require('dotenv').config()

const managers = require('../models/managers.models')
const employees = require('../models/employees.models')

const self = (module.exports = {
  getManagerInfo: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { manager_id } = body
        const managerFound = await managers.findOne({ _id: manager_id })
        if (managerFound) {
          resolve(managerFound)
        } else {
          reject('Manager Not Found!')
        }
      } catch (err) {
        reject(err)
      }
    })
  },

  getEmployeeInfo: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
      } catch (err) {
        reject(err)
      }
    })
  },

  addEmployeeToManager: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { manager_id, employee_id, employee_name } = body
        const findManagerEmployee = await managers.findOne({
          _id: manager_id,
          'employees.employee_id': employee_id,
        })
        if (findManagerEmployee) {
          return reject('Employee already exists under Manager')
        }
        const data = await managers.findByIdAndUpdate(
          { _id: manager_id },
          {
            $push: {
              employees: {
                employee_id,
                employee_name,
              },
            },
          }
        )
        console.log(data)
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  },
})
