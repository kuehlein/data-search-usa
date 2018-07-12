import { addOrRemove } from "../utils";

/*
 * currentColumns are the columns that are selected
 * to be searched with the currentTable
 */

/*
 * ACTION TYPES
 */
const SET_CURRENT_COLUMNS = "SET_CURRENT_COLUMNS";
const SET_ALL_COLUMNS = "SET_ALL_COLUMNS";

/*
 * ACTION CREATORS
 */
export const setCurrentColumns = column => ({
  type: SET_CURRENT_COLUMNS,
  column
});
export const setAllColumns = columns => ({
  type: SET_ALL_COLUMNS,
  columns
});

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_COLUMNS:
      return addOrRemove(state, action.column).sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

    case SET_ALL_COLUMNS:
      return action.columns;

    default:
      return state;
  }
};
