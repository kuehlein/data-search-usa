// manages state of columns in Panels/index
export const filterStateArr = (obj, val, currentVal) => {
  const keys = Object.keys(obj);

  if (!val) {
    const copy = {};
    keys.forEach(elem => {
      if (elem !== currentVal) copy[elem] = elem;
    });
    return Object.keys(copy).length ? copy : {};
  }
  if (!keys[0]) return { [val]: val };
  return Object.assign(obj, { [val]: val });
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
  Array.prototype.diff = function(key) {
    return this.filter(function(i) {
      return key.indexOf(i) < 0;
    });
  };

  const bigger =
    oldColumns.length > newColumns.length ? oldColumns : newColumns;
  const smaller =
    oldColumns.length < newColumns.length ? oldColumns : newColumns;

  return bigger.diff(smaller)[0];
};
