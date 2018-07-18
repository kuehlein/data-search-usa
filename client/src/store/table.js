import axios from "axios";
import {
  formatCurrentColumns,
  formatFilterOptions,
  formatFilterWhereStatements
} from "./utils";

/*
 * table is the data retrieved from a
 * user determined request to datausa's api
 *
 * the tabled was retrieved from:
 * "http://api.datausa.io/api/?show=CURRENT_TABLE&required=COLUMN_1,COLUMN_2,...COLUMN_N&FILTERS_FOR_COLUMNS/TABLES"
 */

/*
 * ACTION TYPES
 */
const TABLE = "TABLE";
const IS_LOADING = "IS_LOADING";
const ADD_NEW_ROWS = "ADD_NEW_ROWS";

/*
 * ACTION CREATORS
 */
export const setTable = table => ({
  type: TABLE,
  table
});
export const isLoading = bool => ({
  type: ADD_NEW_ROWS,
  bool
});
export const addNewRows = newRows => ({
  type: ADD_NEW_ROWS,
  newRows
});

/*
 * THUNK CREATORS
 */
export const fetchTable = (
  currentTable,
  currentColumns,
  currentFilterOptions,
  whereStatements
) => dispatch =>
  axios
    .get(
      `/api/datausa/${currentTable}/${formatCurrentColumns(
        currentColumns
      )}/${formatFilterOptions(
        currentFilterOptions
      )}/${formatFilterWhereStatements(whereStatements)}`
    )
    .then(res => dispatch(setTable(res.data)))
    .catch(err => console.log(err));

export const fetchNewRows = table => dispatch =>
  new Promise(() => dispatch(isLoading(true)))
    .then(
      axios
        .get(`/api/datausa/:/${table.stopIndex}`)
        .then(res => dispatch(addNewRows(res.data)))
        .catch(err => console.log(err))
    )
    .then(() => dispatch(isLoading(false)))
    .catch(err => console.log(err));

/*
 * REDUCER
 */
export default (state = {}, action) => {
  let copy;

  switch (action.type) {
    case TABLE:
      return action.table;

    case IS_LOADING:
      copy = Object.assign({}, state);
      copy.isLoading = action.bool;
      return copy;

    case ADD_NEW_ROWS:
      copy = Object.assign({}, state);
      copy.data = copy.data.concat(action.newRows);
      return copy;

    default:
      return state;
  }
};
