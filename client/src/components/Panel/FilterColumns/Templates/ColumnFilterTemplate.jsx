import React from "react";
import ChooseColumn from "../Buttons/ChooseColumn";
import MapFields from "../Iterables/MapFields";

const ColumnFilterTemplate = (
  currentColumns,
  handleClick,
  handleChange,
  handleInputChange,
  newFilter
) => (column, i) => (
  <div key={i}>
    <ChooseColumn
      currentColumns={currentColumns}
      handleChange={handleChange}
      handleClick={handleClick}
      value={column.name}
    />
    <MapFields
      column={column}
      disable={!!newFilter}
      handleInputChange={handleInputChange}
    />
  </div>
);

export default ColumnFilterTemplate;
