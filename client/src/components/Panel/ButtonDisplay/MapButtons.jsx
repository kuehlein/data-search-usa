import React from "react";
import PropTypes from "prop-types";

const MapButtons = props => {
  const { handleClick, currentOptions, allTables } = props;
  const propsAvailable = allTables.length ? allTables : currentOptions;

  return (
    <div>
      {propsAvailable &&
        propsAvailable.map(column => (
          <button key={column} onClick={() => handleClick(column)}>
            {column}
          </button>
        ))}
    </div>
  );
};
MapButtons.defaultProps = {
  handleClick: () => {},
  allTables: [],
  currentOptions: []
};

MapButtons.propTypes = {
  handleClick: PropTypes.func,
  allTables: PropTypes.arrayOf(PropTypes.string),
  currentOptions: PropTypes.arrayOf(PropTypes.string)
};

export default MapButtons;
