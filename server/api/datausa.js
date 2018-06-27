const router = require("express").Router();
const request = require("request-promise");
const utils = require("./utils");
// necessary models

// GET - datausa catagory titles
router.get("/", (req, res) => {
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

  // res.status(200).send([utils.attributes.data, utils.variables.metadata]);

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
router.get("/:table", (req, res) => {
  const { table } = req.params;

  const options = {
    uri: `http://api.datausa.io/api/?show=${table}&limit=1`,
    simple: false,
    json: true
  };

  // res.status(200).send(utils.degree);

  request(options)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(400).send(err));
});

// GET - datausa tables using selected fields
router.get("/:table/:fields", (req, res) => {
  const { table, fields } = req.params;

  const options = {
    // &sumlevel=${level}
    uri: `http://api.datausa.io/api/?show=${table}&required=${fields}`,
    simple: false,
    json: true
  };

  // res.status(200).send(utils.degree);

  request(options)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
