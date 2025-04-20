const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const dailies = require('../models/daily.model.js')
const employees = require('../models/employees.models.js')
const services = require('../models/services.models.js')
const cameras = require('../models/cameras.models.js')
const camerasData = require('../models/camerasData.models.js')

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

        let sortedArray = []

        userDay.data.map((user) => {
          totalDayOccurences += user.occurences
        })

        sortedArray = userDay.data.sort((a, b) => b.occurences - a.occurences)
        let topFive = [
          sortedArray[0],
          sortedArray[1],
          sortedArray[2],
          sortedArray[3],
          sortedArray[4],
        ]

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

        let performance = (totalPositive / totalDayOccurences) * 100
        let unproductivity = (totalNegative / totalDayOccurences) * 100
        let unknown = 100 - (performance + unproductivity)

        performance = parseFloat(performance.toFixed(1))
        unproductivity = parseFloat(unproductivity.toFixed(1))
        unknown = parseFloat(unknown.toFixed(1))

        let variable = 100 - (performance + unproductivity + unknown)
        unknown += variable

        let stats = {
          performance,
          unproductivity,
          unknown,
          topFive,
        }

        let finalReport = {
          finalReportOccurences,
          finalReportServices,
          stats,
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

  add_camera: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { name, rank, isActive } = body
        const camera = await cameras.create({
          name,
          rank,
          isActive,
        })
        resolve(camera)
      } catch (err) {
        reject(err)
      }
    })
  },

  get_active_cameras: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await cameras.find({ isActive: true })
        resolve(data)
      } catch (err) {
        reject(err)
      }
    })
  },

  update_service: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { service, type } = body
        const serviceFound = await services.updateOne(
          { name: service },
          { $set: { type } }
        )

        resolve(serviceFound)
      } catch (err) {
        reject(err)
      }
    })
  },

  generatePhysicalReport: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const { personName, date } = body

        // Step 1: Pull all camera data for the given date (no name filtering here)
        const cameraData = await camerasData.find({ date })
        console.log(cameraData)
        if (!cameraData || cameraData.length === 0) {
          return reject({
            success: false,
            message: `No data found on ${date}`,
          })
        }

        // Step 2: Filter and track the person's path
        let path = []

        cameraData.forEach((camera) => {
          camera.data.forEach((logLine) => {
            // Check if this log line contains the person's name
            if (
              logLine
                .toLowerCase()
                .includes(`detected: ${personName.toLowerCase()}`)
            ) {
              const timestampMatch = logLine.match(/\[([^\]]+)\]/)
              if (timestampMatch) {
                path.push({
                  cameraSet: camera.name,
                  timestamp: timestampMatch[1],
                })
              }
            }
          })
        })

        // Step 3: Sort by timestamp
        path.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))

        // Step 4: Remove sequential duplicates
        const uniquePath = path.reduce((acc, curr) => {
          if (
            acc.length === 0 ||
            acc[acc.length - 1].cameraSet !== curr.cameraSet
          ) {
            acc.push(curr)
          }
          return acc
        }, [])

        resolve({
          success: true,
          data: uniquePath,
          message: `Successfully generated path report for ${personName} on ${date}`,
        })
      } catch (err) {
        reject({
          success: false,
          err: err.message,
          message: 'An error occurred while generating the path report.',
        })
      }
    })
  },
})
