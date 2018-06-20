/*
 * ACTION TYPES
 */
const SET_OPTIONS = "SET_OPTIONS";
const GET_OPTIONS = "GET_OPTIONS";

/*
 * ACTION CREATORS
 */
export const setOptions = options => ({ type: SET_OPTIONS, options });
export const getOptions = () => ({ type: GET_OPTIONS });

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return action.options;

    case GET_OPTIONS:
      return state;

    default:
      return state;
  }
};
