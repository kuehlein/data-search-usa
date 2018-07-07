import React from "react";

// iterate over the column filter template
const mapFilterTemplate = (Template, currentFilters, addOne) => {
  const allFields = [];
  const len = addOne > 0 ? currentFilters.length + 1 : currentFilters.length;

  for (let i = 0; i < len; i++) {
    allFields.push(<Template key={i} column={currentFilters[i] || ""} />);
  }
  return allFields;
};

export default mapFilterTemplate;
