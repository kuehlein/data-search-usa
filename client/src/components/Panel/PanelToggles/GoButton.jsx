import React from "react";
import PropTypes from "prop-types";

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
  fetchTable: {},
  currentTable: "",
  currentColumns: [],
  currentFilterOptions: {},
  whereStatements: {}
};

GoButton.propTypes = {
  fetchTable: PropTypes.func,
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  currentFilterOptions: PropTypes.objectOf(PropTypes.any),
  whereStatements: PropTypes.objectOf(PropTypes.object)
};

export default GoButton;
