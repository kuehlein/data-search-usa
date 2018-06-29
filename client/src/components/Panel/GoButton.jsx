import React from "react";
import PropTypes from "prop-types";

// request datausa with given params
const GoButton = props => {
  const { fetchTable, currentTable, currentColumns } = props;

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={() => fetchTable(currentTable, currentColumns)}
    >
      Go!
    </button>
  );
};
GoButton.defaultProps = {
  fetchTable: {},
  currentTable: "",
  currentColumns: []
};

GoButton.propTypes = {
  fetchTable: PropTypes.func,
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string)
};

export default GoButton;
