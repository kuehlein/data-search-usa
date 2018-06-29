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
          <select name={field.name} title={field.description}>
            {field.field.map((elem, i) => (
              <option key={i} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        ) : (
          <input type="text" name={field.name} title={field.description} />
        )}
      </label>
    </div>
  );
};
MapFields.defaultProps = {
  field: []
};

MapFields.propTypes = {
  field: PropTypes.any
};

export default MapFields;

// <select name={field.name} onClick={() => handleClick(field)}>
