const express = require('express')
const auth_controllers = require('../controllers/auth.controllers')

const authRouter = express.Router()

authRouter.post('/addManager', auth_controllers.addManager)

authRouter.post('/removeManager', auth_controllers.removeManager)

authRouter.post('/addEmployee', auth_controllers.addEmployee)

authRouter.post('/removeEmployee', auth_controllers.removeEmployee)

authRouter.post('/loginManager', auth_controllers.loginManager)

authRouter.post('/loginEmployee', auth_controllers.loginEmployee)

module.exports = authRouter
