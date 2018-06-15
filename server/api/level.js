'use strict'

const router = require('express').Router()
const request = require('request-promise')
// necessary models


// GET - datausa employment data
router.get('/datausa', (req, res) => {
  const options = {
    uri: 'http://api.datausa.io/api/?show=ipeds&sumlevel=all',
    simple: false,
    json: true
  }

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send('error'))
})

/*
?show=cip
    CIP codes are available at four basic sumlevels: 2-digit (high level), 4 digit, 6-digit (most detailed) and all (2, 4 and 6)

&sumlevel=nation
&sumlevel=all
&sumlevel=state

&year=latest
*/


module.exports = router
