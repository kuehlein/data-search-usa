import React, { Component } from "react";
import PropTypes from "prop-types";

import NewColumnFilterButton from "./Buttons/NewColumnFilterButton";
import ColumnSelectionTemplate from "./Templates/ColumnSelectionTemplate";

import { proliferateFields, compareArrays } from "./utils";

class ColumnFilterFormat extends Component {
  constructor(props) {
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const oldCol = Object.keys(this.props.columns);
    const newCol = Object.keys(nextProps.columns);
    const diff = compareArrays(oldCol, newCol);

    if (newCol.length > oldCol.length) {
      this.props.newWhereColumn(diff);
    }
  }

  handleSelectChange(event, oldColumn) {
    const { handleChange, clearColumn } = this.props;

    handleChange(event, oldColumn);
    if (oldColumn) {
      clearColumn(oldColumn, event.target.value);
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
        {proliferateFields(filterNum, template, columns)}
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
  columns: {},
  filterNum: 0,
  handleClick: () => {},
  handleChange: () => {},
  clearColumn: () => {},
  newWhereColumn: () => {}
};

ColumnFilterFormat.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  columns: PropTypes.objectOf(PropTypes.string),
  filterNum: PropTypes.number,
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  clearColumn: PropTypes.func,
  newWhereColumn: PropTypes.func
};

export default ColumnFilterFormat;
