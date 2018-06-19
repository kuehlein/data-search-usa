import React from 'react';


/*
 * Constructs a table dynamically using
 * the data provided by the server.
 *
 * The "createTable" function is the
 * access point through which all of
 * the other functions are called.
 *
 * This series of functions run in
 * O(n) time and space.
 */


// creates an array of headers for the table
const buildHeader = (headers) => {
  let count = 0;
  const rows = [];

  // builds the headers using jsx and
  // pushes it into an array for later
  while (count < headers.length) {
    rows.push(<th key={count}>{ headers[count] }</th>);
    count++;
  }

  return rows;
};

// formats the numbers with ','
const numberWithCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// creates an array of fields for the table
const fillTable = (data) => {
  let count = 0;
  let depth = 0;
  const rows = [];

  // fills the fields using jsx and
  // pushes it into an array for later
  while (count < data.length) {
    if (rows.length < depth + 1) {
      rows.push([]);
    }
    rows[depth].push(<td key={count}>{ numberWithCommas(data[count]) }</td>);
    count++;
    if (data[depth].length === data.length) {
      count = 0;
      depth++;
    }
  }

  return rows;
};

// delineates each row of data
// headers are formatted differntly
// than body
const buildTable = (rows, body) => (body
  ? (
    rows.map(((row, i) => (
      <tr key={i}>
        { row }
      </tr>
    )))
  )
  : (
    <tr>
      { rows.map(row => row) }
    </tr>
  ));

// entry point for creating a table
const createTable = (headers, data) => {
  const head = buildHeader(headers);
  const body = fillTable(data);

  // puts together the pieces of the table
  return (
    <table>
      <thead>
        { buildTable(head, false) }
      </thead>
      <tbody>
        { body.map(row => buildTable(row, true)) }
      </tbody>
    </table>
  );
};


export default createTable;
