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
  order: "",
  sumlevel: "",
  year: ""
};

/*
 * ACTION TYPES
 */
const CURRENT_FILTER_OPTIONS = "CURRENT_FILTER_OPTIONS";
const CLEAR_FILTER_OPTIONS = "CLEAR_FILTER_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setCurrentFilterOptions = (filter, value) => ({
  type: CURRENT_FILTER_OPTIONS,
  filter,
  value
});
export const clearCurrentFilterOptions = () => ({
  type: CLEAR_FILTER_OPTIONS
});

/*
 * REDUCER
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_FILTER_OPTIONS:
      return Object.assign({}, state, { [action.filter]: action.value });

    case CLEAR_FILTER_OPTIONS:
      return initialState;

    default:
      return state;
  }
};
