import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import OptionsSelect from "./OptionsSelect";
import { fetchCurrentOptions, setCurrentColumns } from "../../../store";

// when a table is selected, display the search options as buttons
class TableFilters extends Component {
  componentWillReceiveProps(nextProps) {
    const { fetchCurrentOptions, allOptions, setCurrentColumns } = this.props;

    // if tables change, clear selected columns, and set new options
    if (this.props.currentTable !== nextProps.currentTable) {
      setCurrentColumns([]);
      fetchCurrentOptions(nextProps.currentTable, allOptions);
    }
  }

  render() {
    const { handleClickFilter, currentOptions, setCurrentColumns } = this.props;

    return (
      <div className="d-flex flex-column justify-content-center">
        <OptionsSelect
          handleClickFilter={handleClickFilter}
          handleClick={setCurrentColumns}
          currentOptions={currentOptions}
        />
      </div>
    );
  }
}
TableFilters.defaultProps = {
  handleClickFilter: () => {},
  currentTable: "",
  currentOptions: [],
  allOptions: {},
  fetchCurrentOptions: () => {},
  setCurrentColumns: () => {}
};

TableFilters.propTypes = {
  handleClickFilter: PropTypes.func,
  currentTable: PropTypes.string,
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  allOptions: PropTypes.objectOf(PropTypes.array),
  fetchCurrentOptions: PropTypes.func,
  setCurrentColumns: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentOptions: state.currentOptions,
  allOptions: state.allOptions
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentOptions: (nextTable, nextOptions, removeTableUtil) =>
    dispatch(fetchCurrentOptions(nextTable, nextOptions, removeTableUtil)),
  setCurrentColumns: (column, currentColumns) =>
    dispatch(setCurrentColumns(column, currentColumns))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableFilters);
