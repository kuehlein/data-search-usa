import { addOrRemove } from "../utils";

/*
 * currentColumns are the columns that are selected
 * to be searched with the currentTable
 */

/*
 * ACTION TYPES
 */
const SET_CURRENT_COLUMNS = "SET_CURRENT_COLUMNS";
const CHANGE_ORDER_CURRENT_COLUMNS = "CHANGE_ORDER_CURRENT_COLUMNS";

/*
 * ACTION CREATORS
 */
export const setCurrentColumns = column => ({
  type: SET_CURRENT_COLUMNS,
  column
});
export const changeOrderCurrentColumns = columns => ({
  type: CHANGE_ORDER_CURRENT_COLUMNS,
  columns
});

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_COLUMNS:
      return addOrRemove(state, action.column);

    case CHANGE_ORDER_CURRENT_COLUMNS:
      return action.columns;

    default:
      return state;
  }
};
