import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapFields from "./MapFields";

import fields from "./filterTableTemplate";

// filter options for querying a table
const FilterTable = props => {
  const { currentColumns, filterOptions, visibility } = props;
  const { otherTables, sumlevel, year } = filterOptions;
  const template = fields(otherTables, currentColumns, sumlevel, year);

  return (
    visibility.filterTable && (
      <MapFields
        template={template}
        currentColumns={currentColumns}
        visibility={visibility}
      />
    )
  );
};
FilterTable.defaultProps = {
  currentColumns: [""],
  filterOptions: {},
  visibility: {}
};

FilterTable.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  filterOptions: PropTypes.objectOf(PropTypes.any),
  visibility: PropTypes.objectOf(PropTypes.bool)
};

const mapStateToProps = state => ({
  currentColumns: state.currentColumns,
  filterOptions: state.filterOptions,
  visibility: state.visibility
});

export default connect(mapStateToProps)(FilterTable);
