import React from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../PanelToggles/ChooseColumn";
import FilterNewColumn from "../PanelToggles/FilterNewColumn";
import FilterDisplay from "./FilterDisplay";

import { proliferateFields } from "../../../utils";
import { where } from "../IterableContent/fieldTemplate";

const jsxTemplate = (currentColumns, handleChange, columns) => i => (
  <div key={i}>
    <ChooseColumn currentColumns={currentColumns} handleChange={handleChange} />
    <FilterDisplay where={where} column={columns[i]} />
  </div>
);

const ManageFilters = props => {
  const {
    handleClick,
    handleChange,
    currentColumns,
    columns,
    filterNum
  } = props;
  const template = jsxTemplate(currentColumns, handleChange, columns);
  const shouldDisable = () => {
    if (!currentColumns[0]) return true;
    return currentColumns.length === filterNum;
  };

  return (
    <div>
      {proliferateFields(filterNum, template).map(set => set)}
      <FilterNewColumn
        handleClick={handleClick}
        shouldDisable={shouldDisable()}
        filterNum={filterNum}
      />
    </div>
  );
};
ManageFilters.defaultProps = {
  handleClick: () => {},
  handleChange: () => {},
  currentColumns: [],
  columns: [],
  filterNum: 0
};

ManageFilters.propTypes = {
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.arrayOf(PropTypes.string),
  filterNum: PropTypes.number
};

export default ManageFilters;
