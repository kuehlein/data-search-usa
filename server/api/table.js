const router = require("express").Router();
const request = require("request-promise");
// necessary models

// PARAM - sets product instance to req.product
router.param("uri", (req, res, next, uri) => {
  req.uri = uri;
  next();
});

// GET - datausa employment data
router.get("/datausa/:uri", (req, res) => {
  const options = {
    uri: `http://api.datausa.io/api/?show=${req.uri}&sumlevel=all&year=latest`,
    simple: false,
    json: true
  };

  request(options)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err));
});

/*
?show=cip
    CIP codes are available at four basic sumlevels:
      -2-digit (high level), 4 digit, 6-digit (most detailed) and all (2, 4 and 6)

?show=cip <--- Classification of Instructional Programs
?show=geo <--- geographies
?show=naics <--- ?

&sumlevel=nation
&sumlevel=all
&sumlevel=state

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

module.exports = router;
