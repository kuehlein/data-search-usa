import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapButtons from "./IterableContent/MapButtons";
import {
  setCurrentOptions,
  fetchCurrentOptions,
  setCurrentColumns
} from "../../store";

// when a table is selected, display the search options as buttons
class OptionsSelection extends Component {
  componentWillReceiveProps(nextProps) {
    const {
      fetchCurrentOptions,
      setCurrentOptions,
      allOptions,
      setCurrentColumns,
      currentColumns
    } = this.props;
    const { currentTable } = nextProps;

    if (currentTable !== this.props.currentTable) {
      fetchCurrentOptions(currentTable, allOptions);

      // if the table is changed, clear the currentOptions
      if (currentColumns.length) {
        setCurrentColumns([], currentColumns);
        setCurrentOptions([]);
      }
    }
  }

  render() {
    const { currentOptions, setCurrentColumns, currentColumns } = this.props;

    return (
      <div className="d-flex flex-column justify-content-center">
        <MapButtons
          handleClick={setCurrentColumns}
          currentOptions={currentOptions}
          currentColumns={currentColumns}
        />
      </div>
    );
  }
}
OptionsSelection.defaultProps = {
  currentTable: "",
  currentOptions: [],
  allOptions: {},
  setCurrentOptions: [],
  fetchCurrentOptions: () => {},
  currentColumns: [],
  setCurrentColumns: () => {}
};

OptionsSelection.propTypes = {
  currentTable: PropTypes.string,
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  allOptions: PropTypes.objectOf(PropTypes.array),
  setCurrentOptions: PropTypes.func,
  fetchCurrentOptions: PropTypes.func,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  setCurrentColumns: PropTypes.any
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentOptions: state.currentOptions,
  allOptions: state.allOptions,
  currentColumns: state.currentColumns
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
)(OptionsSelection);
