/*
 * ACTION TYPES
 */
const SET_CURRENT_OPTIONS = "SET_CURRENT_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setCurrentOptions = options => ({
  type: SET_CURRENT_OPTIONS,
  options
});

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_OPTIONS:
      return action.options;

    default:
      return state;
  }
};
