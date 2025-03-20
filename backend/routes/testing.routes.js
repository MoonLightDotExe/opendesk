const express = require('express')
const testing_controllers = require('../controllers/testing.controllers')

const testingRouter = express.Router()

testingRouter.post(
  '/generateDayReport',
  testing_controllers.generate_day_report
)

module.exports = testingRouter
