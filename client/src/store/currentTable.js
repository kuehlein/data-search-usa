/*
 * currentTable is the currently selected table from
 * the list of allTables
 *
 * currentTable is cross referenced with allOptions to
 * find the currentOptions for the table.
 */

/*
 * ACTION TYPES
 */
const SET_CURRENT_TABLE = "SET_CURRENT_TABLE";

/*
 * ACTION CREATORS
 */
export const setCurrentTable = currentTable => ({
  type: SET_CURRENT_TABLE,
  currentTable
});

/*
 * REDUCER
 */
export default (state = "", action) => {
  switch (action.type) {
    case SET_CURRENT_TABLE:
      return action.currentTable;

    default:
      return state;
  }
};
