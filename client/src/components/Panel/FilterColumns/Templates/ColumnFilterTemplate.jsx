import React from "react";
import PropTypes from "prop-types";

import ChooseColumn from "../Buttons/ChooseColumn";
import RemoveFilterButton from "../Buttons/RemoveFilterButton";
import MapFields from "../Iterables/MapFields";

const ColumnFilterTemplate = props => {
  const {
    currentColumns,
    value,
    whereStatements,
    handleChange,
    handleInputChange,
    chooseVisibilityFilterField,
    chooseVisibilityFilterColumnButton
  } = props;

  return (
    <div className="filter-columns">
      <hr />
      {!value.name && (
        <div className="input-group-prepend group-margin input-group-text position-column-filters">
          <ChooseColumn
            whereStatements={whereStatements}
            chooseVisibilityFilterField={chooseVisibilityFilterField}
            currentColumns={currentColumns}
            handleChange={handleChange}
            value={value.name}
          />
          <RemoveFilterButton
            value={value.name}
            handleChange={handleChange}
            chooseVisibilityFilterField={chooseVisibilityFilterField}
            chooseVisibilityFilterColumnButton={
              chooseVisibilityFilterColumnButton
            }
          />
        </div>
      )}
      {value.name && (
        <div className="input-grouping table-filters group-margin">
          <MapFields value={value} handleInputChange={handleInputChange} />
          <RemoveFilterButton
            value={value.name}
            handleChange={handleChange}
            chooseVisibilityFilterField={chooseVisibilityFilterField}
            chooseVisibilityFilterColumnButton={
              chooseVisibilityFilterColumnButton
            }
          />
        </div>
      )}
    </div>
  );
};
ColumnFilterTemplate.defaultProps = {
  currentColumns: [],
  value: {},
  whereStatements: [{}],
  handleChange: () => {},
  handleInputChange: () => {},
  chooseVisibilityFilterField: () => {},
  chooseVisibilityFilterColumnButton: () => {}
};

ColumnFilterTemplate.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.objectOf(PropTypes.any),
  whereStatements: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleInputChange: PropTypes.func,
  chooseVisibilityFilterField: PropTypes.func,
  chooseVisibilityFilterColumnButton: PropTypes.func
};

export default ColumnFilterTemplate;
