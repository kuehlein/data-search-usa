import React from "react";
import PropTypes from "prop-types";
import MapOptions from "./MapOptions";

// container for select element full of table options
const TableSelect = props => {
  const { handleChange, allTables } = props;

  return (
    <div className="input-group-prepend group-margin">
      <label className="input-group-text" htmlFor="Select table:">
        <div className="label-pad">Select table: </div>
        <select className="custom-select" onChange={e => handleChange(e)}>
          <option />
          <MapOptions allTables={allTables} />
        </select>
      </label>
    </div>
  );
};
TableSelect.defaultProps = {
  handleChange: () => {},
  allTables: []
};

TableSelect.propTypes = {
  handleChange: PropTypes.func,
  allTables: PropTypes.arrayOf(PropTypes.string)
};

export default TableSelect;
