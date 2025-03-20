const dotenv = require('dotenv').config()
const testing_repo = require('../repository/testing.repository.js')

module.exports = {
  generate_day_report: async (req, res) => {
    try {
      const data = await testing_repo.generate_day_report(req.body)
      res.status(201).json({
        success: true,
        data,
        message: 'Day report generated successfully!',
      })
    } catch (err) {
      res.status(400).json({
        success: false,
        err,
        message: err.message,
      })
    }
  },
  add_service: async (req, res) => {
    try {
      const data = await testing_repo.add_service(req.body)
      res.status(201).json({
        success: true,
        data,
        message: 'Service added successfully!',
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
