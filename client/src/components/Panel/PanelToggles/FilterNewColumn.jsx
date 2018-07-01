import React from "react";
import PropTypes from "prop-types";

// generate a field to select a column to filter
const FilterNewColumn = props => {
  const { handleClick, shouldDisable } = props;
  const disable = shouldDisable ? "disabled" : "";

  return (
    <label htmlFor="Filter Another Column?">
      <button
        className={`btn btn-warning ${disable}`}
        onClick={() => handleClick(shouldDisable)}
      >
        Filter Another Column?
      </button>
    </label>
  );
};
FilterNewColumn.defaultProps = {
  handleClick: () => {},
  shouldDisable: false
};

FilterNewColumn.propTypes = {
  handleClick: PropTypes.func,
  shouldDisable: PropTypes.bool
};

export default FilterNewColumn;
