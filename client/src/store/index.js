import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import table from "./table";
import allTables from "./allData/allTables";
import currentTable from "./currentlySet/currentTable";
import allOptions from "./allData/allOptions";
import currentOptions from "./currentlyAvailable/currentOptions";
import filterOptions from "./currentlyAvailable/filterOptions";
import currentColumns from "./currentlySet/currentColumns";
import currentFilterOptions from "./currentlySet/currentFilterOptions";
import whereStatements from "./currentlySet/whereStatements";
import visibility from "./currentlyAvailable/visibility";

const reducer = combineReducers({
  table,
  allTables,
  currentTable,
  allOptions,
  currentOptions,
  filterOptions,
  currentColumns,
  currentFilterOptions,
  whereStatements,
  visibility
});

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger); // ({ collapsed: true })
}

const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(
  reducer
);

export default store;
export * from "./table";
export * from "./allData/allTables";
export * from "./currentlySet/currentTable";
export * from "./allData/allOptions";
export * from "./currentlyAvailable/currentOptions";
export * from "./currentlyAvailable/filterOptions";
export * from "./currentlySet/currentColumns";
export * from "./currentlySet/currentFilterOptions";
export * from "./currentlySet/whereStatements";
export * from "./currentlyAvailable/visibility";

// server api route
export const SERVER = "http://localhost:3001";
