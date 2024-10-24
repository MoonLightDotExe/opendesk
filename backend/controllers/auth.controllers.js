const dotenv = require('dotenv').config()
const auth_repo = require('../repository/auth.repository')

module.exports = {
  addManager: async (req, res) => {
    try {
      // console.log(req.body)
      const data = await auth_repo.addManager(req.body)
      res.status(201).json({
        success: true,
        data,
        message: 'Manager added successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },
  removeManager: async (req, res) => {
    try {
      const data = await auth_repo.removeManager(req.body)

      res.status(200).json({
        success: true,
        data,
        message: 'Manager removed successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },
  addEmployee: async (req, res) => {
    try {
      const data = await auth_repo.addEmployee(req.body)

      res.status(201).json({
        success: true,
        data,
        message: 'Employee added successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },

  removeEmployee: async (req, res) => {
    try {
      const data = await auth_repo.removeEmployee(req.body)

      res.status(201).json({
        success: true,
        data,
        message: 'Employee Removed successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },

  loginManager: async (req, res) => {
    try {
      const data = await auth_repo.loginManager(req.body)

      res.status(200).json({
        success: true,
        data,
        message: 'Manager Logged In successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },

  loginEmployee: async (req, res) => {
    try {
      const data = await auth_repo.loginEmployee(req.body)

      res.status(200).json({
        success: true,
        data,
        message: 'Employee Logged In successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },
}
