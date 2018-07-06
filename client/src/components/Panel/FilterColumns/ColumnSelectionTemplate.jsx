import React from "react";
import ChooseColumn from "./ChooseColumn";
import where from "./filterColumnTemplate";
import MapFields from "./MapFields";

// template for column filter iteration
const ColumnSelectionTemplate = (
  currentColumns,
  handleSelectChange,
  columns
) => i => (
  <div key={i}>
    <ChooseColumn
      currentColumns={currentColumns}
      handleSelectChange={handleSelectChange}
      value={columns[i]}
    />
    <MapFields template={where} column={columns[i]} disable={!columns[i]} />
  </div>
);

export default ColumnSelectionTemplate;
