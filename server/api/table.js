const router = require("express").Router();
const request = require("request-promise");
// necessary models

// GET - datausa catagory titles
router.get("/datausa", (req, res) => {
  const options1 = {
    uri: "http://api.datausa.io/attrs/list/", // tables
    simple: false,
    json: true
  };
  const options2 = {
    uri: "http://api.datausa.io/api/variables/", // all columns
    simple: false,
    json: true
  };
  let firstResponse;

  request(options1)
    .then(response => {
      firstResponse = response.data;
    })
    .then(() => request(options2))
    .then(response => {
      res.status(200).send([firstResponse, response.metadata]);
    })
    .catch(err => console.log(err));
});

// GET - datausa table fields
router.get("/datausa/:table", (req, res) => {
  const { table } = req.params;

  const options = {
    uri: `http://api.datausa.io/api/?show=${table}&year=latest&required=year`,
    simple: false,
    json: true
  };

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

// GET - datausa tables using selected fields
router.get("/datausa/:table/:fields", (req, res) => {
  const { table, fields } = req.params;

  const options = {
    // &sumlevel=${level}
    uri: `http://api.datausa.io/api/?show=${table}`,
    simple: false,
    json: true
  };

  // data.source.table
  // contains column names

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
