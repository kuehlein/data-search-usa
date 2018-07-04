import React from "react";
import PropTypes from "prop-types";

// fill the select element with table options
const MapOptions = props => {
  const { allTables } = props;

  return (
    allTables &&
    allTables.map(table => (
      <option key={table} value={table}>
        {table}
      </option>
    ))
  );
};
MapOptions.defaultProps = {
  allTables: []
};

MapOptions.propTypes = {
  allTables: PropTypes.arrayOf(PropTypes.string)
};

export default MapOptions;
