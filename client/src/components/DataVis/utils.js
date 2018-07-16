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

export default formatTable;
