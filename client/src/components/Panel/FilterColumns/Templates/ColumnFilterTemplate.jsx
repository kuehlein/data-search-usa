import React from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../Buttons/ChooseColumn";
import MapFields from "../Iterables/MapFields";

const ColumnFilterTemplate = (
  currentColumns,
  whereStatements,
  handleClick,
  handleChange,
  handleInputChange,
  newFilter
) => props => {
  const { column, i } = props;
  const value = whereStatements[i] ? whereStatements[i].name : "";

  return (
    <div key={i}>
      <ChooseColumn
        currentColumns={currentColumns}
        handleChange={handleChange}
        handleClick={handleClick}
        value={value}
      />
      <MapFields
        column={column}
        value={whereStatements[i]}
        disable={!!newFilter}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};
ColumnFilterTemplate.defaultProps = {
  column: "",
  i: 0
};

ColumnFilterTemplate.propTypes = {
  column: PropTypes.string,
  i: PropTypes.number
};

export default ColumnFilterTemplate;
