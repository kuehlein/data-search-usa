'use strict'

const router = require('express').Router()
// necessary models


//PARAM - sets product instance to req.product
// router.param('id', (req, res, next, id) => {

// })

// GET - data.gov employment data
// router.get('/api/latest-hubble', (req, res) => {
//   const options = {
//     uri: 'https://data.dol.gov/get/inspection/limit/10',
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     json: true
//   }

//   request(options)
//     .then(data => res.status(200).send(data))
//     .catch(err => res.status(400).send('error'))
// })

//GET - finds all products
router.get('/hi', (req, res, next) => {
  const data = {
    data: 'This is some data'
  }

  res.send(data)
    .catch(next)
})

// error handling for api requests


module.exports = router
