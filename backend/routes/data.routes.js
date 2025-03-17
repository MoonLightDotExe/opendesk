const express = require('express')
const data_controller = require('../controllers/data.controllers')

const router = express.Router()

router.post('/periodic', data_controller.commitData)

module.exports = router
