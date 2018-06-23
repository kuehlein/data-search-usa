/*
 * allTables is a selection of tables that datausa
 * currently has available to query.
 *
 * these tables are retrieved from a request to:
 * "http://api.datausa.io/attrs/list/"
 */

/*
 * ACTION TYPES
 */
const SET_ALL_TABLES = "SET_ALL_TABLES";

/*
 * ACTION CREATORS
 */
export const setAllTables = tables => ({ type: SET_ALL_TABLES, tables });

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_ALL_TABLES:
      return action.tables;

    default:
      return state;
  }
};
