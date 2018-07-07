import React from "react";
import PropTypes from "prop-types";

// generate a field to select a column to filter
const NewColumnFilterButton = props => {
  const { handleClick, shouldDisable } = props;

  return (
    <label htmlFor="Filter Another Column?">
      <button
        className="btn btn-warning"
        onClick={() => handleClick()}
        disabled={shouldDisable}
      >
        Filter Column?
      </button>
    </label>
  );
};
NewColumnFilterButton.defaultProps = {
  handleClick: () => {},
  shouldDisable: true
};

NewColumnFilterButton.propTypes = {
  handleClick: PropTypes.func,
  shouldDisable: PropTypes.bool
};

export default NewColumnFilterButton;
