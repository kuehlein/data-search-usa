// find column in state to determine if
// whereStatements should be updated
const findColumnInState = (state, column) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i].name === column) return true;
  }
  return false;
};

export default findColumnInState;
