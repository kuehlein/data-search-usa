import React from "react";
import PropTypes from "prop-types";

const LABEL_TEXT = "Select a column to filter:";

// generate a field to select a column to filter
const ChooseColumn = props => {
  const { currentColumns, handleClick } = props;

  return (
    <label htmlFor={LABEL_TEXT}>
      {LABEL_TEXT}
      <select onChange={e => handleClick(e)}>
        <option />
        {currentColumns.map((column, i) => (
          <option key={i} value={column}>
            {column}
          </option>
        ))}
      </select>
    </label>
  );
};
ChooseColumn.defaultProps = {
  currentColumns: [],
  handleClick: () => {}
};

ChooseColumn.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  handleClick: PropTypes.func
};

export default ChooseColumn;
