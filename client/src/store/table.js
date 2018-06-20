/*
 * ACTION TYPES
 */
const SET_TABLE = "SET_TABLE";
const GET_TABLE = "GET_TABLE";

/*
 * ACTION CREATORS
 */
export const setTable = table => ({ type: SET_TABLE, table });

export const getTable = () => ({ type: GET_TABLE });

/*
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {
    case SET_TABLE:
      return action.table;

    case GET_TABLE:
    default:
      return state;
  }
};
