const express = require('express')
const testing_controllers = require('../controllers/testing.controllers')

const testingRouter = express.Router()

testingRouter.post(
  '/generateDayReport',
  testing_controllers.generate_day_report
)

testingRouter.post('/addService', testing_controllers.add_service)

module.exports = testingRouter
