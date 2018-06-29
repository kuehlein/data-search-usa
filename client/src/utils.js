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

// remove current table from all tables
// if the table is unavailable from datausa
export const removeMissingTable = (currentTable, allTables) => {
  const copyOfAllTables = allTables.slice();

  removeFromArray(copyOfAllTables, currentTable);
  return copyOfAllTables.sort();
};

// check to see if a search option is selected on local state
// if so, remove it, if not, add it
export const addOrRemove = (arr, column) => {
  const length = arr.length;

  removeFromArray(arr, column);
  if (arr.length === length) arr.push(column);

  return arr;
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

// checks if there are any option for a select element before mapping
export const checkIfEmpty = arr =>
  arr.length ? arr : ["No Values Available At This Time."];
