const dotenv = require('dotenv').config()
const data_repo = require('../repository/data.repository')

module.exports = {
  commitData: async (req, res) => {
    try {
      const data = await data_repo.commitData(req.body)
      res.status(201).json({
        success: true,
        data,
        message: 'Data added successfully!',
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
