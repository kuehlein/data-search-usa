import React from "react";
import PropTypes from "prop-types";
import FieldSelect from "./FieldSelect";

// flesh out the appropriate options for filtering
const MapFields = props => {
  const { field, handleChange } = props;

  return (
    <div>
      <label htmlFor={field.name}>
        {field.name}
        {Array.isArray(field.field) ? (
          <FieldSelect field={field} handleChange={handleChange} />
        ) : (
          <input
            type="text"
            name={field.name}
            title={field.description}
            onChange={e => handleChange(e, field.type)}
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
