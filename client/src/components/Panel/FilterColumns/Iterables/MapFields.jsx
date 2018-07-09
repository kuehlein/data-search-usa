import React from "react";
import PropTypes from "prop-types";
import InputFilter from "./InputFilter";

import where from "../Templates/whereStatementTemplate";

// iterate fields to filter columns
const MapFields = props => {
  const { column, value, columnSelected, handleInputChange } = props;

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
              shouldDisable={!columnSelected}
            />
          </div>
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  column: {},
  value: {},
  columnSelected: false,
  handleInputChange: () => {}
};

MapFields.propTypes = {
  column: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.objectOf(PropTypes.any),
  columnSelected: PropTypes.bool,
  handleInputChange: PropTypes.func
};

export default MapFields;
