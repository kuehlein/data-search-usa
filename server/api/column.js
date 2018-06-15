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

&year=latest

&required=COLUMN_NAME1,COLUMN_NAME2,...,COLUMN_NAMEX

&COLUMN_NAME=COLUMN_NUMBER
    You could filter the results to only show data from a single column

&where=COLUMN_NAME:(operator)VALUE
    operators:
        greater than: >
        less than: <
        string starts with: ^
        string ends with: $ (placed after text)
        not equal (integer): !
        not equal (str): str!
*/

module.exports = router
