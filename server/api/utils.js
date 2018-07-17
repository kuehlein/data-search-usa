// utility function for error handling
const err = (status, message) => {
  const error = new Error(message);
  error.status = status;
  return error;
};

// checks if request param is empty or not
const isEmpty = param => (param === ":" ? "" : param);

// formats the response table recieved from datausa
const formatTable = table => {
  const list = [];

  for (let i = 0; i < table.data.length; i++) {
    const obj = { index: i };

    for (let j = table.headers.length; j--; ) {
      obj[table.headers[j]] = table.data[i][j];
    }

    list.push(obj);
  }

  return list;
};

// sorts the batches that will be used by the table
const nextRows = (table, index) => {
  const rows = [];

  for (let i = index; i < index + 15; i++) {
    if (table[i]) {
      rows.push(table[i]);
    } else {
      break;
    }
  }
  return rows;
};

// manages the rows for lazy loading
function* lazyTableManager(table) {
  let index = yield nextRows(table, 15);

  while (true) {
    const temp = index;

    index = yield nextRows(table, index);

    if (typeof index === "undefined") {
      index = temp + 15;
    }
  }
}

module.exports = {
  err,
  isEmpty,
  formatTable,
  lazyTableManager
};
