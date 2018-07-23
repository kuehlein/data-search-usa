import React from "react";
import PropTypes from "prop-types";
import InputFilter from "./InputFilter";

import where from "../Templates/whereStatementTemplate";

// iterate fields to filter columns
const MapFields = props => {
  const { value, handleInputChange } = props;

  return (
    where &&
    where.map((field, i) => (
      <InputFilter
        key={i}
        field={field}
        value={value}
        handleInputChange={handleInputChange}
      />
    ))
  );
};
MapFields.defaultProps = {
  value: {},
  handleInputChange: () => {}
};

MapFields.propTypes = {
  value: PropTypes.objectOf(PropTypes.any),
  handleInputChange: PropTypes.func
};

export default MapFields;
