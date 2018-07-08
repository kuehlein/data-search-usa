import React from "react";
import PropTypes from "prop-types";
import InputFilter from "./InputFilter";

import where from "../Templates/whereStatementTemplate";

// map out filter fields
const MapFields = props => {
  const { column, value, disable, handleInputChange } = props;

  return (
    <div>
      {where &&
        where.map((field, i) => (
          <div key={i}>
            <InputFilter
              field={field}
              column={column}
              value={value}
              handleInputChange={handleInputChange}
              disable={disable}
            />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  column: {},
  value: {},
  disable: true,
  handleInputChange: () => {}
};

MapFields.propTypes = {
  column: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.objectOf(PropTypes.any),
  disable: PropTypes.bool,
  handleInputChange: PropTypes.func
};

export default MapFields;
