import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapFields from "./MapFields";

import fields from "./filterTableTemplate";

// filter options for querying a table
const FilterTable = props => {
  const { currentColumns, filterOptions } = props;
  const { otherTables, sumlevel, year } = filterOptions;
  const template = fields(otherTables, currentColumns, sumlevel, year);

  return (
    <div className="d-flex flex-column justify-content-center">
      <MapFields template={template} currentColumns={currentColumns} />
    </div>
  );
};
FilterTable.defaultProps = {
  currentColumns: [""],
  filterOptions: {}
};

FilterTable.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  filterOptions: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  currentColumns: state.currentColumns,
  filterOptions: state.filterOptions
});

export default connect(mapStateToProps)(FilterTable);
