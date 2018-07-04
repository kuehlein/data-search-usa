import React from "react";
import PropTypes from "prop-types";
import MapOptions from "./MapOptions";

// container for select element full of table options
const TableSelect = props => {
  const { handleChange, allTables } = props;

  return (
    <div className="form-group">
      <label htmlFor="sel1">
        Select table:
        <select
          className="form-control"
          id="sel1"
          onChange={e => {
            console.log("hi", e.target.value);
            handleChange(e);
          }}
        >
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
