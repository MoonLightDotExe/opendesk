const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const dailies = require('../models/daily.model.js')
const employees = require('../models/employees.models.js')
const services = require('../models/services.models')

const self = (module.exports = {
  generate_day_report: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, date } = body
        if (!name || !date) {
          reject(
            `${!name ? 'Name' : 'Date'} is required to generate day report!`
          )
        }
        const userDay = await dailies.findOne({ name, date })
        if (!userDay) {
          reject("User's working day not found!")
        }

        let totalDayOccurences = 0

        userDay.data.map((user) => {
          totalDayOccurences += user.occurences
        })

        const calculatePercentage = userDay.data.map((user) => {})

        console.log(totalDayOccurences)
        resolve(userDay)
      } catch (err) {
        reject(err)
      }
    })
  },

  add_service: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, type } = body
        const service_exists = await services.findOne({ name })
        if (service_exists) {
          return reject('Service Already exists!')
        }
        const add_service_to_db = await services.create({
          name,
          type,
        })
        console.log(add_service_to_db)
        resolve(add_service_to_db)
      } catch (err) {
        reject(err)
      }
    })
  },
})
