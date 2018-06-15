'use strict'

const router = require('express').Router()
const { err } = require('./utils')


/*
 * ~ROUTER ORDER MATTERS~
 * each route builds up to an api call
 * to an outside server
 */
router.use('/table', require('./table'))
// router.use('/level', require('./level'))
// router.use('/column', require('./column'))

// 404 - error handling middleware
router.use((req, res, next) => next(err(404, 'Not Found')))


module.exports = router
