import React from "react";
import PropTypes from "prop-types";

const MapButtons = props => {
  const { handleClick, currentOptions, currentColumns, allTables } = props;
  const propsAvailable = allTables.length ? allTables : currentOptions;

  return (
    <div className="d-flex justify-content-center flex-wrap">
      {propsAvailable &&
        propsAvailable.map(column => (
          <button
            type="button"
            className="btn btn-light"
            key={column}
            onClick={() => handleClick(column, currentColumns)}
          >
            {column}
          </button>
        ))}
    </div>
    // <div className="form-group">
    //   <label htmlFor="sel1">Select list:</label>
    //   <select className="form-control" id="sel1">
    //     {propsAvailable &&
    //       propsAvailable.map(column => (
    //         <option key={column} onClick={() => handleClick(column)}>
    //           {column}
    //         </option>
    //       ))}
    //   </select>
    // </div>
  );
};
MapButtons.defaultProps = {
  handleClick: () => {},
  allTables: [],
  currentOptions: [],
  currentColumns: []
};

MapButtons.propTypes = {
  handleClick: PropTypes.func,
  allTables: PropTypes.arrayOf(PropTypes.string),
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  currentColumns: PropTypes.arrayOf(PropTypes.string)
};

export default MapButtons;
