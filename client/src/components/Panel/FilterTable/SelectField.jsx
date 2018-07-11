import React from "react";
import PropTypes from "prop-types";

// create select elements and populate them with content from fieldTemplate
const SelectField = props => {
  const { field, handleChange, value } = props;

  return (
    <select
      name={field.name}
      title={field.description}
      value={value}
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
SelectField.defaultProps = {
  field: [],
  handleChange: () => {},
  value: ""
};

SelectField.propTypes = {
  field: PropTypes.any,
  handleChange: PropTypes.func,
  value: PropTypes.string
};

export default SelectField;
