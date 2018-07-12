import { addOrRemove } from "../utils";

/*
 * currentColumns are the columns that are selected
 * to be searched with the currentTable
 */

/*
 * ACTION TYPES
 */
const SET_CURRENT_COLUMNS = "SET_CURRENT_COLUMNS";

/*
 * ACTION CREATORS
 */
export const setCurrentColumns = column => ({
  type: SET_CURRENT_COLUMNS,
  column
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

    default:
      return state;
  }
};
