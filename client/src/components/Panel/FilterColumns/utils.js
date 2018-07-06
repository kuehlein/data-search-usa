// manages state of columns in Panels/index
export const filterStateArr = (obj, val, currentVal) => {
  const keys = Object.keys(obj);
  const copy = { [val]: val };

  if (!keys.length) {
    return { [val]: val };
  }

  keys.forEach(elem => {
    if (elem !== currentVal) copy[elem] = elem;
  });
  return Object.keys(copy).length ? copy : {};
};

// iterate a jsx template
export const proliferateFields = (num, template, columns) => {
  const keys = Object.keys(columns);
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(template(keys[i], i));
  }
  return arr;
};

export const compareArrays = (oldColumns, newColumns) => {
  const bigger =
    oldColumns.length > newColumns.length ? oldColumns : newColumns;
  const smaller =
    oldColumns.length < newColumns.length ? oldColumns : newColumns;
  bigger.diff = function(key) {
    return this.filter(function(i) {
      return key.indexOf(i) < 0;
    });
  };

  return bigger.diff(smaller)[0];
};
