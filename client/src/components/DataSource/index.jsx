import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./Map.css";

const DataSource = props => {
  const { table } = props;

  return table.source ? (
    <div>
      <p>dataset: {table.source.dataset}</p>
      <p>
        org: <a href={table.source.link}>{table.source.org}</a>
      </p>
      <p>table: {table.source.table}</p>
    </div>
  ) : (
    ""
  );
};
DataSource.defaultProps = {
  table: {}
};

DataSource.propTypes = {
  table: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  table: state.table
});

export default connect(mapStateToProps)(DataSource);
