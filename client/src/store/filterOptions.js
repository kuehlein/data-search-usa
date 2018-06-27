/*
 * filterOptions are the options used to fine tune a request
 * in the filterDisplay
 *
 * filterOptions are set in the fetchCurrentOptions thunk
 */

/*
 * INITIAL STATE
 */
const initialState = {
  tableName: "",
  otherTables: [],
  sumlevel: [],
  year: []
};

/*
 * ACTION TYPES
 */
const SET_FILTER_OPTIONS = "SET_FILTER_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setFilterOptions = options => ({
  type: SET_FILTER_OPTIONS,
  options
});

/*
 * REDUCER
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_OPTIONS:
      return action.options;

    default:
      return state;
  }
};
