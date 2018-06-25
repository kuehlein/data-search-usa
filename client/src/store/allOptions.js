import axios from "axios";
import store from "./";
import { setAllTables } from "./allTables";
import { setCurrentOptions } from "./currentOptions";
import { removeMissingTable } from "../utils";

/*
 * allOptions manages the state of an object requested
 * from datausa's api that contains all of the tables
 * and columns associated with those tables.
 *
 * this state is used with the currentTable to determine
 * the columns associated with the currentTable.
 *
 * these options are retrieved from a request to:
 * "http://api.datausa.io/api/variables/"
 */

/*
 * ACTION TYPES
 */
const SET_ALL_OPTIONS = "SET_ALL_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setAllOptions = allOptions => ({
  type: SET_ALL_OPTIONS,
  allOptions
});

/*
 * THUNK CREATORS
 */
// two requests to datausa's api, for tables and options
export const fetchPanelInitial = () => dispatch =>
  axios
    .get("/api/datausa")
    .then(res => {
      dispatch(setAllTables(res.data[0].sort()));
      dispatch(setAllOptions(res.data[1]));
    })
    .catch(err => console.log(err));

/*
 * when a new table is selected request datausa
 * to find the exact table name and cross reference
 * allOptions to find the corresponding options. if an
 * error is returned, remove the table from allTables.
 */
export const fetchCurrentOptions = (nextTable, allOptions) => dispatch =>
  axios
    .get(`/api/datausa/${nextTable}`)
    .then(res => {
      if (res.data.error) {
        const { currentTable, allTables } = store.getState();
        const copyOfAllTables = removeMissingTable(currentTable, allTables);

        dispatch(setCurrentOptions(["THIS TABLE IS CURRENTLY UNAVAILABLE"]));
        dispatch(setAllTables(copyOfAllTables));
      } else {
        dispatch(setCurrentOptions(allOptions[res.data.source.table].sort()));
      }
    })
    .catch(err => console.log(err));

/*
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_OPTIONS:
      return action.allOptions;

    default:
      return state;
  }
};
