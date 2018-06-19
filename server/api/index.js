const router = require('express').Router();
const { err } = require('./utils');


router.use('/table', require('./table'));

// 404 - error handling middleware
router.use((req, res, next) => next(err(404, 'Not Found')));


module.exports = router;
