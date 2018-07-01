import React from "react";
import PropTypes from "prop-types";

// generate a field to select a column to filter
const FilterNewColumn = props => {
  const { handleClick } = props;

  return <button onClick={() => handleClick()}>Filter Another Column?</button>;
};
FilterNewColumn.defaultProps = {
  handleClick: () => {}
};

FilterNewColumn.propTypes = {
  handleClick: PropTypes.func
};

export default FilterNewColumn;
