// manages state of columns in Panels/index
export const filterStateArr = (arr, val, currentVal) => {
  if (!val) {
    const copy = arr.filter(elem => elem !== currentVal);
    return copy.length ? copy : [""];
  }
  if (!arr[0]) return [val];
  return arr.concat(val);
};

// iterate a jsx template
export const proliferateFields = (num, template) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(template(i));
  }
  return arr;
};
