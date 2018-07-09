import React from "react";
import PropTypes from "prop-types";

// generate a field to select a column to filter
const NewColumnFilterButton = props => {
  const { shouldDisable, handleNewFilterColumn } = props;

  return (
    <label htmlFor="Filter Another Column?">
      <button
        className="btn btn-warning"
        value="filter"
        onClick={e => {
          handleNewFilterColumn(e.target.value);
        }}
        disabled={shouldDisable}
      >
        Filter Column?
      </button>
    </label>
  );
};
NewColumnFilterButton.defaultProps = {
  shouldDisable: true,
  handleNewFilterColumn: () => {}
};

NewColumnFilterButton.propTypes = {
  shouldDisable: PropTypes.bool,
  handleNewFilterColumn: PropTypes.func
};

export default NewColumnFilterButton;
