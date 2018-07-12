import React from "react";
import PropTypes from "prop-types";

// fill the select element with column options
const MapOptions = props => {
  const { handleClick, currentOptions } = props;

  return (
    currentOptions &&
    currentOptions.map(column => (
      <button
        key={column}
        type="button"
        className="btn btn-light"
        value="column"
        disabled={column === "THIS TABLE IS CURRENTLY UNAVAILABLE"}
        onClick={() => handleClick(column)}
      >
        {column}
      </button>
    ))
  );
};
MapOptions.defaultProps = {
  handleClick: () => {},
  currentOptions: []
};

MapOptions.propTypes = {
  handleClick: PropTypes.func,
  currentOptions: PropTypes.arrayOf(PropTypes.string)
};

export default MapOptions;
