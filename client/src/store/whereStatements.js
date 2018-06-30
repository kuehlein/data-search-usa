/*
 * whereStatements are the currently selected
 * table query where statements that are submitted when
 * the user hits "Go!" and requests a table.
 *
 * these statements correlate with a corresponding column.
 */

/*
 * INITIAL STATE
 */
const stateTemplate = {
  columnName: "",
  greaterThan: "",
  lessThan: "",
  startsWith: "",
  endsWith: "",
  numNotEqualTo: "",
  textNotEqualTo: ""
};

/*
 * ACTION TYPES
 */
const NEW_WHERE_STATEMENT = "NEW_WHERE_STATEMENT";
const CLEAR_WHERE_STATEMENTS = "CLEAR_WHERE_STATEMENT";

/*
 * ACTION CREATORS
 */
export const newWhereStatement = statements => ({
  type: NEW_WHERE_STATEMENT,
  statements
});
export const clearWhereStatements = () => ({
  type: CLEAR_WHERE_STATEMENTS
});

/*
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case NEW_WHERE_STATEMENT:
      return state.concat(action.statements);

    case CLEAR_WHERE_STATEMENTS:
      return [];

    default:
      return state;
  }
};
