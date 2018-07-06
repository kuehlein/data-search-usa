import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapFields from "./MapFields";

import fields from "./filterTableTemplate";

// filter options for querying a table
const FilterTable = props => {
  const { currentOptions, filterOptions } = props;
  const { otherTables, sumlevel, year } = filterOptions;
  const template = fields(otherTables, currentOptions, sumlevel, year);

  return (
    <div className="d-flex flex-column justify-content-center">
      <MapFields template={template} />
    </div>
  );
};
FilterTable.defaultProps = {
  currentOptions: [""],
  filterOptions: {}
};

FilterTable.propTypes = {
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  filterOptions: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  currentOptions: state.currentOptions,
  filterOptions: state.filterOptions
});

export default connect(mapStateToProps)(FilterTable);
