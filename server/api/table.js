const router = require("express").Router();
const request = require("request-promise");
// necessary models

// GET - datausa catagory titles
router.get("/datausa", (req, res) => {
  const options = {
    uri: "http://api.datausa.io/attrs/list/",
    simple: false,
    json: true
  };

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

// GET - datausa tables
router.get("/datausa/:table/", (req, res) => {
  const { table } = req.params;

  // loop through misc and figure out what exists
  // then format the request properly?

  const options = {
    uri: `http://api.datausa.io/api/?show=${table}`, // &sumlevel=${level}
    simple: false,
    json: true
  };

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
