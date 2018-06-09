'use strict'

const Sequelize = require('sequelize')
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:3000/income-and-taxes', {
    logging: false
  }
)


module.exports = db
