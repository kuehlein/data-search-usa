import React from "react";
import PropTypes from "prop-types";

// fill the select element with column options
const SelectAll = props => {
  const { handleSelectAll, currentOptions } = props;

  return currentOptions.length ? (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => handleSelectAll()}
    >
      Select All?
    </button>
  ) : (
    ""
  );
};
SelectAll.defaultProps = {
  handleSelectAll: () => {},
  currentOptions: []
};

SelectAll.propTypes = {
  handleSelectAll: PropTypes.func,
  currentOptions: PropTypes.arrayOf(PropTypes.string)
};

export default SelectAll;
