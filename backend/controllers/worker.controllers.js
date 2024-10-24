const dotenv = require('dotenv').config()
const worker_repo = require('../repository/worker.repository.js')

module.exports = {
  getEmployeeData: async (req, res) => {
    try {
      const data = await worker_repo.getEmployeeData(req.body)
      res.status(200).json({
        success: true,
        data,
        message: 'Employee Data Retrieved Successfully',
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
