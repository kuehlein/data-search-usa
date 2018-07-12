// checks if there are any option for a select element before mapping
export const checkIfEmpty = arr => (arr.length ? arr : []);

// find column in state to determine if
// whereStatements should be updated
export const findColumnInState = (state, column) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].name === column) return true;
  }
  return false;
};
