import React from "react";
import PropTypes from "prop-types";

// create select elements and populate them with content from fieldTemplate
const SelectField = props => {
  const { field, handleChange, value, disable } = props;

  return (
    <select
      name={field.name}
      title={field.description}
      value={value}
      onChange={e => handleChange(e, field.type)}
      disabled={disable}
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
  value: "",
  disable: true
};

SelectField.propTypes = {
  field: PropTypes.any,
  handleChange: PropTypes.func,
  value: PropTypes.string,
  disable: PropTypes.bool
};

export default SelectField;
