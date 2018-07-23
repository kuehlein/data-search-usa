import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const DataSource = props => {
  const { table } = props;

  return table.source ? (
    <div className="data-source">
      <p>
        <span className="step-signifier">dataset:</span> {table.source.dataset}
      </p>
      <p>
        <span className="step-signifier">org:</span>{" "}
        <a href={table.source.link}>{table.source.org}</a>
      </p>
      <p>
        <span className="step-signifier">table:</span> {table.source.table}
      </p>
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
