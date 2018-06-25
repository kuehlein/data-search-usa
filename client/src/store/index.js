import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import table from "./table";
import allTables from "./allTables";
import currentTable from "./currentTable";
import allOptions from "./allOptions";
import currentOptions from "./currentOptions";

const reducer = combineReducers({
  table,
  allTables,
  currentTable,
  allOptions,
  currentOptions
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

// server api route
export const SERVER = "http://localhost:3001";
