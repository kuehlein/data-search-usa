import React from "react";

// iterate over the column filter template
const mapFilterTemplate = (
  Template,
  currentFilters,
  newFilter,
  currentColumns,
  whereStatements,
  handleClick,
  handleChange,
  handleInputChange
) => {
  const allFields = [];
  const len = newFilter > 0 ? currentFilters.length + 1 : currentFilters.length;

  for (let i = 0; i < len; i++) {
    allFields.push(
      <Template
        key={i}
        column={currentFilters[i]}
        i={i}
        newFilter={newFilter}
        currentColumns={currentColumns}
        whereStatements={whereStatements}
        handleClick={handleClick}
        handleChange={handleChange}
        handleInputChange={handleInputChange}
      />
    );
  }
  return allFields;
};

export default mapFilterTemplate;
