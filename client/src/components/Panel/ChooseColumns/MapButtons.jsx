import React from "react";
import PropTypes from "prop-types";

// fill the select element with column options
const MapOptions = ({ handleClick, currentOptions, currentColumns }) =>
  currentOptions &&
  currentOptions.map(column => (
    <button
      key={column}
      type="button"
      className={`${
        currentColumns.includes(column) ? "options-button-selected" : ""
      } options-button`}
      value="column"
      disabled={column === "THIS TABLE IS UNAVAILABLE"}
      onClick={() => handleClick(column)}
    >
      {column}
    </button>
  ));
MapOptions.defaultProps = {
  handleClick: () => {},
  currentOptions: [""],
  currentColumns: [""]
};

MapOptions.propTypes = {
  handleClick: PropTypes.func,
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  currentColumns: PropTypes.arrayOf(PropTypes.string)
};

export default MapOptions;
