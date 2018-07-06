/*
 * this is a utility file containing helper functions for
 * store/allOptions ButtonDisplay/OptionsSelection.jsx
 */

// searches an array for a value, and removes it
const removeFromArray = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = arr[arr.length - 1];
      arr.pop();
      return arr;
    }
  }
  return arr;
};

// check to see if a search option is selected on local state
// if so, remove it, if not, add it
export const addOrRemove = (arr, column) => {
  const copyOfArr = arr.slice();
  const length = copyOfArr.length;

  if (Array.isArray(column)) return column;

  removeFromArray(copyOfArr, column);
  if (copyOfArr.length === length) copyOfArr.push(column);

  return copyOfArr;
};

// remove current table from all tables
// if the table is unavailable from datausa
export const removeMissingTable = (currentTable, allTables) => {
  const copyOfAllTables = allTables.slice();

  removeFromArray(copyOfAllTables, currentTable);
  return copyOfAllTables.sort();
};

// finds the different sumLevels for a certain attribute
export const findLevels = allTables => {
  let levels = [];
  const keys = Object.keys(allTables);

  for (let i = 0; i < keys.length; i++) {
    if (allTables[keys[i]] !== "year" && allTables[keys[i]] !== "table") {
      const options = allTables[keys[i]].map(str => `${str} (${keys[i]})`);
      levels = levels.concat(options);
    }
  }
  return levels;
};

// remove empty field from state of whereStatments
export const removeEmptyField = (state, column, name) => {
  const keys = Object.keys(state[column]);
  const newObj = {};

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== name) {
      newObj[keys[i]] = state[column][keys[i]];
    }
  }

  return Object.assign({}, state, { [column]: newObj });
};

// when another column is selected in place of the current one
// remove old column and replace it
export const removeColumn = (state, column) => {
  const keys = Object.keys(state);
  const newObj = {};

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] !== column) {
      newObj[keys[i]] = state[keys[i]];
    }
  }

  return newObj;
};
