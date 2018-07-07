import { columnTemplate, buildNewState, updateColumnInState } from "./utils";

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
const UPDATE_COLUMN = "UPDATE_COLUMN";
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
export const updateColumn = (oldColumn, newColumn) => ({
  type: UPDATE_COLUMN,
  oldColumn,
  newColumn
});
export const clearWhereStatements = () => ({
  type: CLEAR_WHERE_STATEMENTS
});

/*
 * REDUCER
 */
export default (state = [], action) => {
  let copy;

  switch (action.type) {
    case NEW_WHERE_COLUMN:
      copy = Object.assign({}, columnTemplate, { name: action.column });
      return state.slice.push(copy);

    case NEW_WHERE_STATEMENT:
      return buildNewState(state, action.value, action.name, action.column);

    case UPDATE_COLUMN:
      return updateColumnInState(
        state.slice(),
        action.oldColumn,
        action.newColumn
      );

    case CLEAR_WHERE_STATEMENTS:
      return [];

    default:
      return state;
  }
};

/*
 * REDUCER
 */
// export default (state = {}, action) => {
//   let copy;

//   switch (action.type) {
//     case NEW_WHERE_COLUMN:
//       return Object.assign({}, state, { [action.column]: {} });

//     case NEW_WHERE_STATEMENT:
//       if (!action.value) {
//         return removeEmptyField(state, action.column, action.name);
//       }
//       copy = Object.assign({}, state);

//       if (copy[action.column]) {
//         copy[action.column][action.name] = action.value;
//       } else {
//         copy[action.column] = { [action.name]: action.value };
//       }
//       return copy;

//     case UPDATE_COLUMN:
//       copy = action.oldColumn ? removeColumn(state, action.oldColumn) : state;
//       return action.newColumn
//         ? Object.assign({}, copy, { [action.newColumn]: {} })
//         : copy;

//     case CLEAR_WHERE_STATEMENTS:
//       return {};

//     default:
//       return state;
//   }
// };
