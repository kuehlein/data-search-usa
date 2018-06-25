const router = require("express").Router();
const { err } = require("./utils");

// the route for requesting tables from datausa's api
router.use("/datausa", require("./datausa.js"));

// 404 - error handling middleware
router.use((req, res, next) => next(err(404, "Not Found")));

module.exports = router;
