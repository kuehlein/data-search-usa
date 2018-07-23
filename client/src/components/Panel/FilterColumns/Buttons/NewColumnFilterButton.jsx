import React from "react";
import PropTypes from "prop-types";

// generate a field to select a column to filter
const NewColumnFilterButton = props => (
  <label htmlFor="Filter Another Column?">
    <button
      className="panel-button filter-columns-button"
      value="filter"
      onClick={() => props.handleClick()}
    >
      Filter Column?
    </button>
  </label>
);
NewColumnFilterButton.defaultProps = {
  handleClick: () => {}
};

NewColumnFilterButton.propTypes = {
  handleClick: PropTypes.func
};

export default NewColumnFilterButton;
