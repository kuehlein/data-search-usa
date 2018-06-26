import axios from "axios";
import store from "./";
import { setAllTables } from "./allTables";
import { removeMissingTable } from "../utils";

/*
 * currentOptions are the options that are currently
 * available for querying the currnetTable
 *
 * these options were pulled from allOptions using currentTable
 */

/*
 * ACTION TYPES
 */
const SET_CURRENT_OPTIONS = "SET_CURRENT_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setCurrentOptions = options => ({
  type: SET_CURRENT_OPTIONS,
  options
});

/*
 * THUNK CREATORS
 */
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
        console.log("co", res);
        dispatch(setCurrentOptions(allOptions[res.data.source.table].sort()));
      }
    })
    .catch(err => console.log(err));

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_OPTIONS:
      return action.options;

    default:
      return state;
  }
};
