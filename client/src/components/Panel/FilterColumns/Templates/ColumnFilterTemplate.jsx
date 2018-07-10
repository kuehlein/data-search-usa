import React from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../Buttons/ChooseColumn";
import MapFields from "../Iterables/MapFields";

const ColumnFilterTemplate = props => {
  const {
    currentColumns,
    value,
    handleChange,
    handleInputChange,
    chooseVisibilityFilterField
  } = props;

  return (
    <div>
      <ChooseColumn
        chooseVisibilityFilterField={chooseVisibilityFilterField}
        currentColumns={currentColumns}
        handleChange={handleChange}
        value={value.name}
      />
      <MapFields value={value} handleInputChange={handleInputChange} />
    </div>
  );
};
ColumnFilterTemplate.defaultProps = {
  currentColumns: [],
  value: {},
  handleChange: () => {},
  handleInputChange: () => {},
  chooseVisibilityFilterField: () => {}
};

ColumnFilterTemplate.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.objectOf(PropTypes.any),
  handleChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  chooseVisibilityFilterField: PropTypes.func
};

export default ColumnFilterTemplate;
