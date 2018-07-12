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

// format currentColumns for DNDColumnOrder
export const formatColumnsForTree = columns => {
  const treeData = [];

  for (let i = 0; i < columns.length; i++) {
    treeData.push({ title: columns[i] });
  }
  return treeData;
};

// return treedata to state format
export const formatColumnsForState = tree => {
  const currentColumns = [];

  for (let i = 0; i < tree.length; i++) {
    currentColumns.push(tree[i].title);
  }
  return currentColumns;
};
