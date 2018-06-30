import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import table from "./table";
import allTables from "./allTables";
import currentTable from "./currentTable";
import allOptions from "./allOptions";
import currentOptions from "./currentOptions";
import filterOptions from "./filterOptions";
import currentColumns from "./currentColumns";
import currentFilterOptions from "./currentFilterOptions";
import whereStatements from "./whereStatements";

const reducer = combineReducers({
  table,
  allTables,
  currentTable,
  allOptions,
  currentOptions,
  filterOptions,
  currentColumns,
  currentFilterOptions,
  whereStatements
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from "./table";
export * from "./allTables";
export * from "./currentTable";
export * from "./allOptions";
export * from "./currentOptions";
export * from "./filterOptions";
export * from "./currentColumns";
export * from "./currentFilterOptions";
export * from "./whereStatements";

// server api route
export const SERVER = "http://localhost:3001";
