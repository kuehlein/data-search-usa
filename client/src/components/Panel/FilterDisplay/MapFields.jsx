import React from "react";
import PropTypes from "prop-types";

const MapFields = props => {
  const { handleClick, currentOptions, allTables } = props;
  const propsAvailable = allTables.length ? allTables : currentOptions;

  return (
    <div>
      {propsAvailable &&
        propsAvailable.map(column => (
          <div key={column}>
            <label>
              {column}
              <input type="text" name="fname" />
            </label>
            <br />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  handleClick: () => {},
  allTables: [],
  currentOptions: []
};

MapFields.propTypes = {
  handleClick: PropTypes.func,
  allTables: PropTypes.arrayOf(PropTypes.string),
  currentOptions: PropTypes.arrayOf(PropTypes.string)
};

export default MapFields;

// THIS IS ONLY A GIST SO FAR
