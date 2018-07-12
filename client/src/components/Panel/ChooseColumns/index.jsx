import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import OptionsSelect from "./OptionsSelect";

import { findColumnInState } from "../utils";
import {
  fetchCurrentOptions,
  setCurrentColumns,
  chooseVisibilityFilterColumnButton,
  updateColumn
} from "../../../store";

// when a table is selected, display the search options as buttons
class TableFilters extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      fetchCurrentOptions,
      allOptions,
      setCurrentColumns,
      chooseVisibilityFilterColumnButton
    } = this.props;

    // if tables change, clear selected columns, and set new options
    if (this.props.currentTable !== nextProps.currentTable) {
      setCurrentColumns([]);
      fetchCurrentOptions(nextProps.currentTable, allOptions);
    }

    if (!nextProps.currentColumns.length) {
      chooseVisibilityFilterColumnButton(false);
    }
  }

  handleClick(column) {
    const { setCurrentColumns, updateColumn, whereStatements } = this.props;

    setCurrentColumns(column);

    if (findColumnInState(whereStatements, column)) {
      updateColumn(column, "");
    }
  }

  render() {
    const { currentOptions } = this.props;

    return (
      <div className="d-flex flex-column justify-content-center">
        <OptionsSelect
          handleClick={this.handleClick}
          currentOptions={currentOptions}
        />
      </div>
    );
  }
}
TableFilters.defaultProps = {
  currentTable: "",
  currentOptions: [],
  allOptions: {},
  currentColumns: [""],
  fetchCurrentOptions: () => {},
  setCurrentColumns: () => {},
  chooseVisibilityFilterColumnButton: () => {},
  whereStatements: [{}],
  updateColumn: () => {}
};

TableFilters.propTypes = {
  currentTable: PropTypes.string,
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  allOptions: PropTypes.objectOf(PropTypes.array),
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  fetchCurrentOptions: PropTypes.func,
  setCurrentColumns: PropTypes.func,
  chooseVisibilityFilterColumnButton: PropTypes.func,
  whereStatements: PropTypes.arrayOf(PropTypes.object),
  updateColumn: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentOptions: state.currentOptions,
  allOptions: state.allOptions,
  currentColumns: state.currentColumns,
  whereStatements: state.whereStatements
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentOptions: (nextTable, nextOptions, removeTableUtil) =>
    dispatch(fetchCurrentOptions(nextTable, nextOptions, removeTableUtil)),
  setCurrentColumns: (column, currentColumns) =>
    dispatch(setCurrentColumns(column, currentColumns)),
  chooseVisibilityFilterColumnButton: visibility =>
    dispatch(chooseVisibilityFilterColumnButton(visibility)),
  updateColumn: (oldColumn, newColumn) =>
    dispatch(updateColumn(oldColumn, newColumn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableFilters);
