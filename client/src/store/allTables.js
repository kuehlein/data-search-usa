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
