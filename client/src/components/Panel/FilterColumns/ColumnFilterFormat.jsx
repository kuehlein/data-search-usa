import React, { Component } from "react";
import PropTypes from "prop-types";

import NewColumnFilterButton from "./Buttons/NewColumnFilterButton";
import ColumnSelectionTemplate from "./ColumnSelectionTemplate";

import { proliferateFields } from "./utils";

class ColumnFilterFormat extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleSelectChange(event, oldColumn) {
    const { handleChange, clearColumn } = this.props;

    handleChange(event, oldColumn);
    if (oldColumn) {
      clearColumn(oldColumn, event.target.value);
      // clear input fields (in state)
    }
  }

  render() {
    const { handleClick, currentColumns, columns, filterNum } = this.props;
    const template = ColumnSelectionTemplate(
      currentColumns,
      this.handleSelectChange,
      columns
    );
    const shouldDisable = !currentColumns[0]
      ? true
      : currentColumns.length === filterNum;

    return (
      <div>
        {proliferateFields(filterNum, template).map(set => set)}
        <NewColumnFilterButton
          handleClick={handleClick}
          shouldDisable={shouldDisable}
          filterNum={filterNum}
        />
      </div>
    );
  }
}
ColumnFilterFormat.defaultProps = {
  currentColumns: [],
  columns: [],
  filterNum: 0,
  handleClick: () => {},
  handleChange: () => {},
  clearColumn: () => {}
};

ColumnFilterFormat.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.arrayOf(PropTypes.string),
  filterNum: PropTypes.number,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  clearColumn: PropTypes.func
};

export default ColumnFilterFormat;
