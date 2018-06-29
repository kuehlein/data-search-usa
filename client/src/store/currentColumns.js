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
export const setCurrentColumns = (currentColumns, currentState) => ({
  type: SET_CURRENT_COLUMNS,
  currentColumns,
  currentState
});

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_COLUMNS:
      return addOrRemove(action.currentState, action.currentColumns);

    default:
      return state;
  }
};
