const express = require('express')
const user_repo = require('../controllers/users.controllers')

const userRouter = express.Router()

userRouter.post('/addEmployeeToManager', user_repo.addEmployeeToManager)

userRouter.post('/getManagerEmployees', user_repo.getManagerEmployees)

module.exports = userRouter
