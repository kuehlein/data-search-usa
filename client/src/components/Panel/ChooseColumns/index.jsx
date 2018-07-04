import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import OptionsSelect from "./OptionsSelect";
import {
  setCurrentOptions,
  fetchCurrentOptions,
  setCurrentColumns
} from "../../../store";

// when a table is selected, display the search options as buttons
class TableFilters extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      fetchCurrentOptions,
      setCurrentOptions,
      allOptions,
      setCurrentColumns
    } = this.props;

    if (this.props.currentTable !== nextProps.currentTable) {
      // retrieve options for next table
      fetchCurrentOptions(nextProps.currentTable, allOptions);

      // if the table is changed, clear the currentOptions
      setCurrentColumns([]);
      setCurrentOptions([]);
    }
  }

  render() {
    const { currentOptions, setCurrentColumns } = this.props;

    return (
      <div className="d-flex flex-column justify-content-center">
        <OptionsSelect
          handleClick={setCurrentColumns}
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
  setCurrentOptions: [],
  fetchCurrentOptions: () => {},
  setCurrentColumns: () => {}
};

TableFilters.propTypes = {
  currentTable: PropTypes.string,
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  allOptions: PropTypes.objectOf(PropTypes.array),
  setCurrentOptions: PropTypes.func,
  fetchCurrentOptions: PropTypes.func,
  setCurrentColumns: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentOptions: state.currentOptions,
  allOptions: state.allOptions
});

const mapDispatchToProps = dispatch => ({
  setCurrentOptions: currentOptions =>
    dispatch(setCurrentOptions(currentOptions)),
  fetchCurrentOptions: (nextTable, nextOptions, removeTableUtil) =>
    dispatch(fetchCurrentOptions(nextTable, nextOptions, removeTableUtil)),
  setCurrentColumns: (column, currentColumns) =>
    dispatch(setCurrentColumns(column, currentColumns))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableFilters);
