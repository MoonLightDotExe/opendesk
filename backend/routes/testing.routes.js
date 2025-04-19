const express = require('express')
const testing_controllers = require('../controllers/testing.controllers')

const testingRouter = express.Router()

testingRouter.post(
  '/generateDayReport',
  testing_controllers.generate_day_report
)

testingRouter.post('/addService', testing_controllers.add_service)

testingRouter.post('/addCamera', testing_controllers.add_camera)

testingRouter.get('/getActiveCameras', testing_controllers.get_active_cameras)

module.exports = testingRouter
