'use strict'

const router = require('express').Router()
const request = require('request-promise')
// necessary models


// GET - datausa employment data
router.get('/datausa/:table/:level/:misc', (req, res) => {
  const { table, level, misc } = req.params

  // loop through misc and figure out what exists
  // then format the request properly?

  const options = {
    uri: `http://api.datausa.io/api/?show=${table}&sumlevel=${level}`,
    simple: false,
    json: true
  }

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send('error'))
})

// do these in reverse order so that
// the less complex requests are skipped over
// ???
// wouldnt all following be hit if matched?
// router.get('/datausa/:table/:level', (req, res) => {
//   const { table, level } = req.params
//   const options = {
//     uri: `http://api.datausa.io/api/?show=${table}&sumlevel=${level}`,
//     simple: false,
//     json: true
//   }

//   request(options)
//     .then(data => res.status(200).send(data))
//     .catch(err => res.status(400).send('error'))
// })


module.exports = router
