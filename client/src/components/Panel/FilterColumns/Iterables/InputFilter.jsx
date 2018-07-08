import React from "react";
import PropTypes from "prop-types";

// flesh out the appropriate options for filtering
const MapInput = props => {
  const { field, column, value, shouldDisable, handleInputChange } = props;
  const inputValue = value.filters ? value.filters[field.name] : "";

  return (
    <div>
      <label htmlFor={field.name}>
        {field.name}
        <input
          type="text"
          name={field.name}
          title={field.description}
          value={inputValue}
          onChange={e => handleInputChange(e, field.name, column)}
          // disabled={shouldDisable}
        />
      </label>
    </div>
  );
};
MapInput.defaultProps = {
  field: [],
  column: {},
  value: {},
  shouldDisable: true,
  handleInputChange: () => {}
};

MapInput.propTypes = {
  field: PropTypes.any,
  column: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.objectOf(PropTypes.any),
  shouldDisable: PropTypes.bool,
  handleInputChange: PropTypes.func
};

export default MapInput;
