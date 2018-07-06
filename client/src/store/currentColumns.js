import { addOrRemove } from "./utils";

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
export const setCurrentColumns = currentColumns => ({
  type: SET_CURRENT_COLUMNS,
  currentColumns
});

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_COLUMNS:
      return addOrRemove(state, action.currentColumns);

    default:
      return state;
  }
};
