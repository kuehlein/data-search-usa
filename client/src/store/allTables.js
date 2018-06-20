/*
 * ACTION TYPES
 */
const SET_ALL_TABLES = "SET_ALL_TABLES";
const GET_ALL_TABLES = "GET_ALL_TABLES";

/*
 * ACTION CREATORS
 */
export const setAllTables = tables => ({ type: SET_ALL_TABLES, tables });

export const getAllTables = () => ({ type: GET_ALL_TABLES });

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_ALL_TABLES:
      return action.tables;

    case GET_ALL_TABLES:
    default:
      return state;
  }
};
