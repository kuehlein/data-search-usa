'use strict'

const path = require('path')
const express = require('express')
// const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const { db } = require('./db')
const app = express()


const createApp = () => {

  // logging middleware
  app.use(morgan('dev'))

  // body parsing middleware
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  // route to api
  app.use('/api', require('./api'))

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')))

  // staticly serve styles
  app.use(express.static(path.join(__dirname, '..', 'client', 'styles')))

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'))
  })

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
  })
}

const startListening = () => {
  const server = app.listen(PORT, () => console.log(`Gettin down and dirty on port ${ PORT }`))
}

const syncDb = () => db.sync()

// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  syncDb()
    .then(createApp)
    .then(startListening)
} else {
  createApp()
}


module.exports = app
