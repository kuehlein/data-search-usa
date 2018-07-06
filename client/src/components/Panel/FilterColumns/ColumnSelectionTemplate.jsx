import React from "react";
import ChooseColumn from "./ChooseColumn";
import where from "./filterColumnTemplate";
import MapFields from "./MapFields";

// template for column filter iteration
const ColumnSelectionTemplate = (
  currentColumns,
  handleSelectChange,
  columns
) => key => (
  <div key={key}>
    <ChooseColumn
      currentColumns={currentColumns}
      handleSelectChange={handleSelectChange}
      value={columns[key]}
    />
    <MapFields template={where} column={columns[key]} disable={!columns[key]} />
  </div>
);

export default ColumnSelectionTemplate;
