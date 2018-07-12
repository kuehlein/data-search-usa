/*
 * disabled manages the state of what is currently accessable
 * in the application. If a portion of the form is not ready
 * to be completed it will be hidden.
 *
 * each part of the state is used in className to toggle
 * visibility with bootstrap classes
 */

/*
 * INITIAL STATE
 */
const initialState = {
  filterTable: false,
  filterField: false,
  filterColumnButton: false,
  goButton: false
};

/*
 * ACTION TYPES
 */
const CHOOSE_VISIBILITY_FILTER_TABLE = "CHOOSE_VISIBILITY_FILTER_TABLE";
const CHOOSE_VISIBILITY_FILTER_FIELD = "CHOOSE_VISIBILITY_FILTER_FIELD";
const CHOOSE_VISIBILITY_FILTER_COLUMN_BUTTON =
  "CHOOSE_VISIBILITY_FILTER_COLUMN_BUTTON";
const CHOOSE_VISIBILITY_GO_BUTTON = "CHOOSE_VISIBILITY_GO_BUTTON";
const HIDE_ALL = "HIDE_ALL";

/*
 * ACTION CREATORS
 */
export const chooseVisibilityFilterTable = visibility => ({
  type: CHOOSE_VISIBILITY_FILTER_TABLE,
  visibility
});
export const chooseVisibilityFilterField = visibility => ({
  type: CHOOSE_VISIBILITY_FILTER_FIELD,
  visibility
});
export const chooseVisibilityFilterColumnButton = visibility => ({
  type: CHOOSE_VISIBILITY_FILTER_COLUMN_BUTTON,
  visibility
});
export const chooseVisibilityGoButton = visibility => ({
  type: CHOOSE_VISIBILITY_GO_BUTTON,
  visibility
});
export const hideAll = () => ({
  type: HIDE_ALL
});

/*
 * REDUCER
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_VISIBILITY_FILTER_TABLE:
      return Object.assign({}, initialState, {
        filterTable: action.visibility
      });

    case CHOOSE_VISIBILITY_FILTER_FIELD:
      return Object.assign({}, state, { filterField: action.visibility });

    case CHOOSE_VISIBILITY_FILTER_COLUMN_BUTTON:
      return Object.assign({}, state, {
        filterColumnButton: action.visibility
      });

    case CHOOSE_VISIBILITY_GO_BUTTON:
      return Object.assign({}, state, { goButton: action.visibility });

    case HIDE_ALL:
      return initialState;

    default:
      return state;
  }
};
