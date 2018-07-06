import React from "react";
import PropTypes from "prop-types";

// generate a field to select a column to filter
const NewColumnFilterButton = props => {
  const { handleClick, shouldDisable, filterNum } = props;
  const disable = shouldDisable ? "disabled" : "";

  return (
    <label htmlFor="Filter Another Column?">
      <button
        className={`btn btn-warning ${disable}`}
        onClick={() => handleClick(shouldDisable)}
      >
        {filterNum ? "Filter Another Column?" : "Filter Column?"}
      </button>
    </label>
  );
};
NewColumnFilterButton.defaultProps = {
  handleClick: () => {},
  shouldDisable: false,
  filterNum: 0
};

NewColumnFilterButton.propTypes = {
  handleClick: PropTypes.func,
  shouldDisable: PropTypes.bool,
  filterNum: PropTypes.number
};

export default NewColumnFilterButton;
