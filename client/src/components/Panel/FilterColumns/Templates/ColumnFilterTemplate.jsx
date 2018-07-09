import React, { Component } from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../Buttons/ChooseColumn";
import MapFields from "../Iterables/MapFields";

class ColumnFilterTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnSelected: false
    };
    this.handleColumnSelection = this.handleColumnSelection.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { handleColumnValue, emptySet } = this.props;

    console.log("shouldDisable", emptySet);

    handleColumnValue(emptySet);
  }

  handleColumnSelection(event) {
    const { handleColumnValue, handleNewFilterColumn, emptySet } = this.props;
    const { value } = event.target;

    if (value) {
      this.setState({ columnSelected: true });
      handleColumnValue(emptySet);
      handleNewFilterColumn();
    } else {
      this.setState({ columnSelected: false });
      handleColumnValue(emptySet);
    }
  }

  render() {
    const {
      column,
      i,
      currentColumns,
      whereStatements,
      handleChange,
      handleInputChange,
      handleColumnValue
    } = this.props;
    const value = whereStatements[i] ? whereStatements[i].name : "";

    return (
      <div key={i}>
        <ChooseColumn
          handleColumnSelection={this.handleColumnSelection}
          currentColumns={currentColumns}
          handleChange={handleChange}
          value={value}
          handleColumnValue={handleColumnValue}
        />
        <MapFields
          column={column}
          columnSelected={this.state.columnSelected}
          value={whereStatements[i]}
          handleInputChange={handleInputChange}
        />
      </div>
    );
  }
}
ColumnFilterTemplate.defaultProps = {
  column: {},
  i: 0,
  currentColumns: [],
  whereStatements: {},
  handleChange: () => {},
  handleInputChange: () => {},
  handleColumnValue: () => {},
  emptySet: false,
  handleNewFilterColumn: () => {}
};

ColumnFilterTemplate.propTypes = {
  column: PropTypes.objectOf(PropTypes.any),
  i: PropTypes.number,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  whereStatements: PropTypes.arrayOf(PropTypes.any),
  handleChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleColumnValue: PropTypes.func,
  emptySet: PropTypes.bool,
  handleNewFilterColumn: PropTypes.func
};

export default ColumnFilterTemplate;
