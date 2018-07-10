import React from "react";
import PropTypes from "prop-types";

// flesh out the appropriate options for filtering
const InputFilter = props => {
  const { field, value, handleInputChange } = props;
  const inputValue = value.filters ? value.filters[field.name] : "";

  return (
    <label htmlFor={field.name}>
      {field.name}
      <input
        type="text"
        name={field.name}
        title={field.description}
        value={inputValue}
        onChange={e => handleInputChange(e, field.name, value)}
      />
    </label>
  );
};
InputFilter.defaultProps = {
  field: [],
  value: {},
  handleInputChange: () => {}
};

InputFilter.propTypes = {
  field: PropTypes.any,
  value: PropTypes.objectOf(PropTypes.any),
  handleInputChange: PropTypes.func
};

export default InputFilter;
