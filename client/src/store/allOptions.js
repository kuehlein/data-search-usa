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
