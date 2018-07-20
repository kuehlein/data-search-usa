const router = require("express").Router();
const request = require("request-promise");
const { isEmpty, formatTable, lazyTableManager } = require("./utils");

let tableContext;

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

  request(options)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(400).send(err));
});

// GET - the next rows in the current table
router.get("/:table/:index", (req, res) => {
  const { index } = req.params;

  console.log("index------------", index);
  const nextRows = !isEmpty(index)
    ? tableContext.next()
    : tableContext.next(+index);
  console.log("newRows-----------", nextRows.value.length);

  res.status(200).send(nextRows.value);
});

// GET - datausa tables using selected fields
router.get("/:table/:fields/:filters/:where", (req, res) => {
  const { table, fields, filters, where } = req.params;
  const requiredColumns = isEmpty(fields);
  const filtersAvailable = isEmpty(filters);
  const statementsAvailable = isEmpty(where);
  const options = {
    uri: `http://api.datausa.io/api/?show=${table}${requiredColumns}${filtersAvailable}${statementsAvailable}`,
    simple: false,
    json: true
  };

  request(options)
    .then(response => {
      const formatted = formatTable(response);
      tableContext = lazyTableManager(formatted);

      response.size = response.data.length;
      response.data = tableContext.next().value;
      response.headers = response.headers.sort();
      response.isLoading = false;

      res.status(200).send(response);
    })
    .catch(() =>
      res
        .status(400)
        .send({ error: "This dataset is unavailable at this time." })
    );
});

module.exports = router;
