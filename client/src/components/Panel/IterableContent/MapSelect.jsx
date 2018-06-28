import React from "react";
import PropTypes from "prop-types";

// flesh out the appropriate options for filtering
const MapFields = props => {
  const { field } = props;

  return (
    <div>
      <label htmlFor={field.name}>
        {field.name}
        {Array.isArray(field.field) ? (
          <select name={field.name}>
            {field.length &&
              field.map(elem => (
                <option key={elem.name} value={elem.field}>
                  {elem.field}
                </option>
              ))}
          </select>
        ) : (
          <input type="text" name={field.name} />
        )}
      </label>
    </div>
  );
};
MapFields.defaultProps = {
  field: []
};

MapFields.propTypes = {
  field: PropTypes.arrayOf(PropTypes.object)
};

export default MapFields;

// <select name={field.name} onClick={() => handleClick(field)}>
