import React from "react";
import ChooseColumn from "../Buttons/ChooseColumn";
import where from "./filterColumnTemplate";
import MapFields from "../Iterables/MapFields";

// template for column filter iteration
const ColumnSelectionTemplate = (
  currentColumns,
  handleSelectChange,
  columns,
  filterNum
) => (key, i) => (
  <div key={i}>
    <ChooseColumn
      currentColumns={currentColumns}
      handleSelectChange={handleSelectChange}
      value={columns[key]}
    />
    <MapFields
      template={where}
      column={columns[key]}
      filterNum={filterNum}
      disable={!columns[key]}
    />
  </div>
);

export default ColumnSelectionTemplate;
