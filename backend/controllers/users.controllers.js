const dotenv = require('dotenv').config()
const users_repo = require('../repository/users.repository')

module.exports = {
  getManagerInfo: async (req, res) => {
    try {
      const data = await users_repo.getManagerInfo(req.body)
      res.status(200).json({
        success: true,
        data,
        message: 'Manager Info Retrieved Successfully!',
      })
    } catch (err) {}
  },

  addEmployeeToManager: async (req, res) => {
    try {
      const data = await users_repo.addEmployeeToManager(req.body)
      res.status(200).json({
        success: true,
        data,
        message: 'Employee added to Manager Successfully!',
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
