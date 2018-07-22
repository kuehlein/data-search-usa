import React from "react";
import PropTypes from "prop-types";

// flesh out the appropriate options for filtering
const InputFilter = props => {
  const { field, value, handleInputChange } = props;
  const inputValue = value.filters ? value.filters[field.name] : "";

  return (
    <div className="input-group-prepend">
      <label htmlFor={field.name}>
        <div className="input-group-text label-pad">{`${field.name}:`}</div>
      </label>
      <input
        type="text"
        name={field.name}
        title={field.description}
        value={inputValue}
        onChange={e =>
          handleInputChange(value.name, field.name, e.target.value)
        }
        className="form-control"
      />
    </div>
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
