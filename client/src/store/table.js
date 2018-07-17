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

/*
 * ACTION CREATORS
 */
export const setTable = table => ({
  type: TABLE,
  table
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

/*
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {
    case TABLE:
      return action.table;

    default:
      return state;
  }
};
