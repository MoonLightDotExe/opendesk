const express = require('express')
const workerControllers = require('../controllers/worker.controllers')

const workerRouter = express.Router()

workerRouter.get('/worker/getEmployeeData', workerControllers.getEmployeeData)

module.exports = workerRouter
