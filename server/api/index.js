'use strict'

const router = require('express').Router()


router.use('/employment', require('./employment'))

router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
})


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})


module.exports = router
