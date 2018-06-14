'use strict'

const router = require('express').Router()
const request = require('request-promise')
// necessary models


//PARAM - sets product instance to req.product
// router.param('id', (req, res, next, id) => {
// })

// GET - data.gov employment data
router.get('/usgov', (req, res) => {
  const options = {
    uri: 'https://data.dol.gov/get/inspection/limit/50',
    headers: {
      'X-API-KEY': '05b23400-ae97-4909-904b-9abaf6b86323',
      'Content-Type': 'application/json'
    },
    simple: false
  }

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send('error'))
})

// GET - datausa employment data
router.get('/datausa', (req, res) => {
  const options = {
    uri: 'http://api.datausa.io/api/required=yg_income_distribution',
    simple: false,
    json: true
  }

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send('error'))
})
// yg_income_distribution
// http://api.datausa.io/api/?show=cip&sumlevel=2&required=yg_income_distribution





//GET - finds all products
// router.get('/hi', (req, res, next) => {
//   const test = {
//     testing: 'This is sent from the server'
//   }

//   res.send(test) // setting headers after they are sent?
//     .catch(next)
// })

// error handling for api requests


module.exports = router
