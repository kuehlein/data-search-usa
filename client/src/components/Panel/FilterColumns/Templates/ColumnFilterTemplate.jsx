import React from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../Buttons/ChooseColumn";
import MapFields from "../Iterables/MapFields";

const ColumnFilterTemplate = props => {
  const {
    column,
    i,
    newFilter,
    currentColumns,
    whereStatements,
    handleClick,
    handleChange,
    handleInputChange
  } = props;
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
  column: {},
  i: 0,
  newFilter: -1,
  currentColumns: [],
  whereStatements: {},
  handleClick: () => {},
  handleChange: () => {},
  handleInputChange: () => {}
};

ColumnFilterTemplate.propTypes = {
  column: PropTypes.objectOf(PropTypes.any),
  i: PropTypes.number,
  newFilter: PropTypes.number,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  whereStatements: PropTypes.arrayOf(PropTypes.any),
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  handleInputChange: PropTypes.func
};

export default ColumnFilterTemplate;
