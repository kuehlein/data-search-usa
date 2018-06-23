/*
 * allOptions manages the state of an object requested
 * from datausa's api that contains all of the tables
 * and columns associated with those tables.
 *
 * this state is used with the currentTable to determine
 * the columns associated with the currentTable.
 *
 * these options are retrieved from a request to:
 * "http://api.datausa.io/api/variables/"
 */

/*
 * ACTION TYPES
 */
const SET_ALL_OPTIONS = "SET_ALL_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setAllOptions = allOptions => ({
  type: SET_ALL_OPTIONS,
  allOptions
});

/*
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {
    case SET_ALL_OPTIONS:
      return action.allOptions;

    default:
      return state;
  }
};
