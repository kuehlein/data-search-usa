import React from "react";

// iterate over the column filter template
const mapFilterTemplate = (
  Template,
  whereStatements,
  clicked,
  shouldDisable,
  currentColumns,
  handleChange,
  handleInputChange,
  handleColumnValue,
  handleNewFilterColumn
) => {
  const allFields = [];
  const len = clicked ? whereStatements.length + 1 : whereStatements.length;

  for (let i = 0; i < len; i++) {
    const lastVal =
      i === len - 1 && shouldDisable ? handleColumnValue : () => {};

    allFields.push(
      <Template
        key={i}
        column={whereStatements[i]}
        i={i}
        currentColumns={currentColumns}
        whereStatements={whereStatements}
        handleChange={handleChange}
        handleInputChange={handleInputChange}
        handleColumnValue={lastVal}
        emptySet={!clicked}
        handleNewFilterColumn={handleNewFilterColumn}
      />
    );
  }
  return allFields;
};

export default mapFilterTemplate;
