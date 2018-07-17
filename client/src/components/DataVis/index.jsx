import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "immutable";

import InfiniteScrollTable from "./InfiniteScrollTable";

const DataVis = props =>
  props.table.data ? (
    <InfiniteScrollTable
      list={List(props.table.data)}
      headers={props.table.headers}
    />
  ) : (
    ""
  );
DataVis.defaultProps = {
  table: {}
};

DataVis.propTypes = {
  table: PropTypes.objectOf(PropTypes.any)
};

const mapStateToProps = state => ({
  table: state.table
});

export default connect(mapStateToProps)(DataVis);
