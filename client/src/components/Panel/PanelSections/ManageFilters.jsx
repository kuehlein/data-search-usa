import React from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../PanelToggles/ChooseColumn";
import FilterNewColumn from "../PanelToggles/FilterNewColumn";
import FilterDisplay from "./FilterDisplay";

import { where } from "../IterableContent/fieldTemplate";

const jsxTemplate = (currentColumns, handleChange, columns) => [
  <div>
    <ChooseColumn currentColumns={currentColumns} handleChange={handleChange} />
    <FilterDisplay where={where} column={columns[0]} />
  </div>
];

const proliferateFields = (num, template) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(template);
  }
  return arr;
};

const ManageFilters = props => {
  const {
    handleClick,
    handleChange,
    currentColumns,
    columns,
    filterNum
  } = props;
  const template = jsxTemplate(currentColumns, handleChange, columns);

  return (
    <div>
      {proliferateFields(filterNum, template).map(set => set)}
      <FilterNewColumn handleClick={handleClick} />
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
