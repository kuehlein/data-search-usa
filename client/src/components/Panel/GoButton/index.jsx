import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchTable, chooseVisibilitySpinner, setTable } from "../../../store";

// request datausa with given params
const GoButton = props => {
  const {
    fetchTable,
    currentTable,
    currentColumns,
    currentFilterOptions,
    whereStatements,
    visibility,
    chooseVisibilitySpinner,
    setTable
  } = props;

  return (
    visibility.goButton && (
      <button
        type="button"
        className="btn go-button"
        onClick={() => {
          setTable({});
          chooseVisibilitySpinner(true);
          fetchTable(
            currentTable,
            currentColumns,
            currentFilterOptions,
            whereStatements
          );
        }}
      >
        Go!
      </button>
    )
  );
};
GoButton.defaultProps = {
  currentTable: "",
  currentColumns: [],
  currentFilterOptions: {},
  whereStatements: [{}],
  fetchTable: () => {},
  visibility: {},
  chooseVisibilitySpinner: () => {},
  setTable: () => {}
};

GoButton.propTypes = {
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  currentFilterOptions: PropTypes.objectOf(PropTypes.any),
  whereStatements: PropTypes.arrayOf(PropTypes.object),
  fetchTable: PropTypes.func,
  visibility: PropTypes.objectOf(PropTypes.bool),
  chooseVisibilitySpinner: PropTypes.func,
  setTable: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentColumns: state.currentColumns,
  currentFilterOptions: state.currentFilterOptions,
  whereStatements: state.whereStatements,
  visibility: state.visibility
});

const mapDispatchToProps = dispatch => ({
  fetchTable: (table, columns, tableFilters, columnFilters) =>
    dispatch(fetchTable(table, columns, tableFilters, columnFilters)),
  chooseVisibilitySpinner: visibility =>
    dispatch(chooseVisibilitySpinner(visibility)),
  setTable: table => dispatch(setTable(table))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoButton);
