import React from "react";
import PropTypes from "prop-types";

import TableFilterDisplay from "./TableFilterDisplay";

// map out filter fields
const MapFields = props => {
  const { template, currentColumns } = props;

  return (
    <div className="input-grouping table-filters group-margin">
      {template &&
        template.map((field, i) => (
          <TableFilterDisplay
            key={i}
            field={field}
            currentColumns={currentColumns}
          />
        ))}
    </div>
  );
};
MapFields.defaultProps = {
  template: [{}],
  currentColumns: [""]
};

MapFields.propTypes = {
  template: PropTypes.arrayOf(PropTypes.object),
  currentColumns: PropTypes.arrayOf(PropTypes.string)
};

export default MapFields;
