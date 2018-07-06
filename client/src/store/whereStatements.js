import { removeEmptyField, removeColumn } from "./utils";

/*
 * whereStatements are the currently selected
 * filters for a column of the currently
 * selected table.
 */

/*
 * ACTION TYPES
 */
const NEW_WHERE_COLUMN = "NEW_WHERE_COLUMN";
const NEW_WHERE_STATEMENT = "NEW_WHERE_STATEMENT";
const CLEAR_COLUMN = "CLEAR_COLUMN";
const CLEAR_WHERE_STATEMENTS = "CLEAR_WHERE_STATEMENT";

/*
 * ACTION CREATORS
 */
export const newWhereColumn = column => ({
  type: NEW_WHERE_COLUMN,
  column
});
export const newWhereStatement = (column, name, value) => ({
  type: NEW_WHERE_STATEMENT,
  column,
  name,
  value
});
export const clearColumn = (oldColumn, newColumn) => ({
  type: CLEAR_COLUMN,
  oldColumn,
  newColumn
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
    case NEW_WHERE_COLUMN:
      return Object.assign({}, state, { [action.column]: {} });

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

    case CLEAR_COLUMN:
      copy = action.oldColumn ? removeColumn(state, action.oldColumn) : state;
      return Object.assign({}, copy, { [action.newColumn]: {} });

    case CLEAR_WHERE_STATEMENTS:
      return {};

    default:
      return state;
  }
};
