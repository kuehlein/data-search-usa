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
// router.get("/datausa/:table/", (req, res) => {
//   const { table } = req.params;

//   const options = {
//     uri: `http://api.datausa.io/attrs/${table}/`,
//     simple: false,
//     json: true
//   };
//   // data array
//   // ["num", "title"]
//   // headers

// figure out how to require specific columns

//   request(options)
//     .then(data => res.status(200).send(data))
//     .catch(err => res.status(400).send(err));
// });

// GET - datausa tables
router.get("/datausa/:table/", (req, res) => {
  const { table } = req.params;

  const options = {
    // &sumlevel=${level}
    uri: `http://api.datausa.io/api/?show=${table}`,
    simple: false,
    json: true
  };

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

module.exports = router;
