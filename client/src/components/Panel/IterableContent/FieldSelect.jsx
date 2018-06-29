import React from "react";
import PropTypes from "prop-types";

// create select elements and populate them with content from fieldTemplate
const FieldSelect = props => {
  const { field, handleChange } = props;

  return (
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
  );
};
FieldSelect.defaultProps = {
  field: [],
  handleChange: () => {}
};

FieldSelect.propTypes = {
  field: PropTypes.any,
  handleChange: PropTypes.func
};

export default FieldSelect;
