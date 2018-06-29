import React from "react";
import PropTypes from "prop-types";

// flesh out the appropriate options for filtering
const MapFields = props => {
  const { field, handleChange } = props;

  return (
    <div>
      <label htmlFor={field.name}>
        {field.name}
        {Array.isArray(field.field) ? (
          <select
            name={field.name}
            title={field.description}
            onChange={e => handleChange(e, field.type)}
          >
            <option />
            {field.field.map((elem, i) => (
              <option key={i} value={elem}>
                {elem}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            name={field.name}
            title={field.description}
            onChange={handleChange}
          />
        )}
      </label>
    </div>
  );
};
MapFields.defaultProps = {
  field: [],
  handleChange: () => {}
};

MapFields.propTypes = {
  field: PropTypes.any,
  handleChange: PropTypes.func
};

export default MapFields;
