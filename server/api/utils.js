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
const nextRows = (table, oldIndex, newIndex) => {
  const rows = [];

  for (let i = oldIndex; i < newIndex + 15; i++) {
    if (table[i]) {
      rows.push(table[i]);
    } else {
      break;
    }
  }

  return rows;
};

// manages chunking the rows for lazy loading
function* lazyTableManager(table) {
  let index = yield nextRows(table, 0, 15);
  let old = 30;
  index = index || 30;

  while (true) {
    const temp = old;
    // console.log("old", old, "\nindex", index);

    index = yield nextRows(table, old, index);

    if (typeof index === "undefined") {
      index = old + 15;
      old = index;
    } else {
      old = temp;
    }
  }
}

module.exports = {
  err,
  isEmpty,
  formatTable,
  lazyTableManager
};
