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
        let totalPositive = 0
        let totalNegative = 0
        let threatDetected = 0
        let totalUnknown = 0

        let positiveServices = []
        let negativeServices = []
        let threats = []
        let unknownServices = []

        userDay.data.map((user) => {
          totalDayOccurences += user.occurences
        })

        let imported_services = await services.find({})

        userDay.data.map((user) => {
          let service_found = imported_services.find((e) => {
            return e.name == user.field
          })
          // console.log(service_found)
          if (service_found) {
            // console.log(service_found)
            if (service_found.type == 0) {
              totalPositive += user.occurences
              positiveServices.push(user.field)
            } else if (service_found.type == 1) {
              totalNegative += user.occurences
              negativeServices.push(user.field)
            } else if (service_found.type == 2) {
              threatDetected += 1
              threats.push(user.field)
            } else {
              totalUnknown += user.occurences
              unknownServices.push(user.field)
            }
          } else {
            totalUnknown += user.occurences
            unknownServices.push(user.field)
          }
        })

        let finalReportOccurences = {
          totalDayOccurences,
          totalPositive,
          totalNegative,
          totalUnknown,
          threatDetected,
        }

        let finalReportServices = {
          positiveServices,
          negativeServices,
          threats,
          unknownServices,
        }

        let finalReport = {
          finalReportOccurences,
          finalReportServices,
        }

        console.log(finalReport)
        resolve(finalReport)
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
