import React from "react";
import PropTypes from "prop-types";

// fill the select element with column options
const MapOptions = props => {
  const { handleClickFilter, handleClick, currentOptions } = props;

  return (
    currentOptions &&
    currentOptions.map(column => (
      <button
        key={column}
        type="button"
        className="btn btn-light"
        value="column"
        onClick={e => {
          handleClickFilter(e);
          handleClick(column);
        }}
      >
        {column}
      </button>
    ))
  );
};
MapOptions.defaultProps = {
  handleClickFilter: () => {},
  handleClick: () => {},
  currentOptions: []
};

MapOptions.propTypes = {
  handleClickFilter: PropTypes.func,
  handleClick: PropTypes.func,
  currentOptions: PropTypes.arrayOf(PropTypes.string)
};

export default MapOptions;
