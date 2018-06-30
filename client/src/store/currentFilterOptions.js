/*
 * currentFilterOptions are the currently selected
 * table query filter options that are submitted when
 * the user hits "Go!" and requests a table.
 */

/*
 * INITIAL STATE
 */
const initialState = {
  force: "",
  limit: "",
  order: [],
  sumlevel: "",
  year: ""
};

/*
 * ACTION TYPES
 */
const CURRENT_FILTER_OPTIONS = "CURRENT_FILTER_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setCurrentFilterOptions = filters => ({
  type: CURRENT_FILTER_OPTIONS,
  filters
});

/*
 * REDUCER
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_FILTER_OPTIONS:
      return action.filters;

    default:
      return state;
  }
};
