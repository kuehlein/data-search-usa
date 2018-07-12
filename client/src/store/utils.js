import _ from "lodash";

/*
 * this is a utility file containing helper functions for
 * store/allOptions ButtonDisplay/OptionsSelection.jsx
 */

// searches an array for a value, and removes it
const removeFromArray = (arr, item, index) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = arr[arr.length - 1];
      arr.pop();
      index = i;
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
  if (copyOfArr.length === length) {
    copyOfArr.push(column);
  }

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

// template for columns in state of whereStatements
export const columnTemplate = {
  name: "",
  filters: {
    "Greater Than": "",
    "Less Than": "",
    "Starts With": "",
    "Ends With": "",
    "Number Not Equal To": "",
    "Text Not Equal To": ""
  }
};

const checkStateForColumn = (state, column) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].name === column) return i;
  }
  return -1;
};

const updateState = (state, event, field) => {
  state.filters[field] = event;

  return state;
};

const replaceColumn = (state, obj, index) => {
  state[index] = obj;

  return state;
};

const removeColumn = (state, index) =>
  state.slice(0, index).concat(state.slice(index + 1));

// build new state for whereStatements
export const buildNewState = (state, event, field, column) => {
  const columnIndex = checkStateForColumn(state, column);
  const newState = updateState(state[columnIndex], event, field);

  return replaceColumn(state, newState, columnIndex);
};

// find and update a column in state
export const updateColumnInState = (state, oldColumn, newColumn) => {
  const oldColumnIndex = checkStateForColumn(state, oldColumn);
  const newColumnIndex = checkStateForColumn(state, newColumn);
  const newObj = _.cloneDeep(columnTemplate);
  newObj.name = newColumn;

  if (oldColumnIndex > -1) {
    if (newColumnIndex > -1 || !newColumn) {
      return removeColumn(state, oldColumnIndex);
    }
    state[oldColumnIndex] = newObj;
  } else if (newColumnIndex < 0) {
    state.push(newObj);
  }

  return state;
};

const extractSumlevel = str => {
  const levels = str.split(" ");

  return `&show=${levels[1].slice(1, -1)}&sumlevel=${levels[0]}`;
};

// format currentFilterOptions for api request
export const formatFilterOptions = obj => {
  const keys = Object.keys(obj);
  let request = "";

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "sumlevel") {
      request += extractSumlevel(obj[keys[i]]);
    } else if (obj[keys[i]]) {
      request += `&${keys[i]}=${obj[keys[i]]}`;
    }
  }
  return request.length ? request : ":";
};

// format currentFilterOptions for api request
export const formatFilterWhereStatements = obj => {
  const keys = Object.keys(obj);
  let request = "";

  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]]) {
      request += `&${keys[i]}=${obj[keys[i]]}`;
    }
  }
  return request;
};
