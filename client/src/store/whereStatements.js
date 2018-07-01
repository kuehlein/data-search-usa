import { removeEmptyField } from "../utils";

/*
 * whereStatements are the currently selected
 * table query where statements that are submitted when
 * the user hits "Go!" and requests a table.
 *
 * these statements correlate with a corresponding column.
 */

/*
 * ACTION TYPES
 */
const NEW_WHERE_STATEMENT = "NEW_WHERE_STATEMENT";
const CLEAR_WHERE_STATEMENTS = "CLEAR_WHERE_STATEMENT";

/*
 * ACTION CREATORS
 */
export const newWhereStatement = (column, name, value) => ({
  type: NEW_WHERE_STATEMENT,
  column,
  name,
  value
});
export const clearWhereStatements = () => ({
  type: CLEAR_WHERE_STATEMENTS
});

/*
 * REDUCER
 */
export default (state = {}, action) => {
  let copy;

  switch (action.type) {
    case NEW_WHERE_STATEMENT:
      if (!action.value) {
        return removeEmptyField(state, action.column, action.name);
      }
      copy = Object.assign({}, state);

      if (copy[action.column]) {
        copy[action.column][action.name] = action.value;
      } else {
        copy[action.column] = { [action.name]: action.value };
      }
      return copy;

    case CLEAR_WHERE_STATEMENTS:
      return {};

    default:
      return state;
  }
};
