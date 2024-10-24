const mongoose = require('mongoose')

const connectDB = async (req, res) => {
  try {
    const MONGOOSE_OPTIONS = {
      dbName: 'OpenDesk',
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 60000,
    }
    const MONGO_URI = process.env.MONGO_URI

    const connect = await mongoose.connect(MONGO_URI, MONGOOSE_OPTIONS)
    console.log(`Database connected on : ${connect.connection.host}`)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = connectDB
