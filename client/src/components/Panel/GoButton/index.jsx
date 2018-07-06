import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchTable } from "../../../store";

// request datausa with given params
const GoButton = props => {
  const {
    fetchTable,
    currentTable,
    currentColumns,
    currentFilterOptions,
    whereStatements
  } = props;

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() =>
        fetchTable(
          currentTable,
          currentColumns,
          currentFilterOptions,
          whereStatements
        )
      }
    >
      Go!
    </button>
  );
};
GoButton.defaultProps = {
  currentTable: "",
  currentColumns: [],
  currentFilterOptions: {},
  whereStatements: {},
  fetchTable: () => {}
};

GoButton.propTypes = {
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  currentFilterOptions: PropTypes.objectOf(PropTypes.any),
  whereStatements: PropTypes.objectOf(PropTypes.object),
  fetchTable: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentColumns: state.currentColumns,
  currentFilterOptions: state.currentFilterOptions,
  whereStatements: state.whereStatements
});

const mapDispatchToProps = dispatch => ({
  fetchTable: (table, columns, tableFilters, columnFilters) =>
    dispatch(fetchTable(table, columns, tableFilters, columnFilters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoButton);
