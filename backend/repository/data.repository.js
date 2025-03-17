const dotenv = require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const daily = require('../models/daily.model.js')

const self = (module.exports = {
  commitData: (body) => {
    return new Promise(async (resolve, reject) => {
      try {
        const date = new Date().toLocaleDateString()
        const user = await daily.findOne({ name: body.name, date: body.date })
        // console.log(user)
        if (user) {
          let user_data = user.data
          let new_data = []

          body.data.map((d) => {
            let change = 0
            user_data.map((u) => {
              if (d.field === u.field) {
                u.occurences += d.occurences
                change = 1
              }
            })
            if (change == 0) {
              new_data.push({
                field: d.field,
                occurences: 1,
              })
            }
          })

          // console.log(new_data)

          user_data.push(...new_data)

          console.log(user_data)

          const updateUser = await daily.findOneAndUpdate(
            { name: user.name },
            { data: user_data },
            {
              new: true,
            }
          )

          console.log(updateUser)
        } else {
          console.log('False detected!')
          const data = await daily.create({
            name: body.name,
            date: body.date,
            data: body.data,
          })
        }
        resolve(body)
      } catch (err) {
        reject(err)
      }
    })
  },
})
