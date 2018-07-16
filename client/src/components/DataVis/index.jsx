import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "immutable";

import InfiniteScrollTable from "./InfiniteScrollTable";

import formatTable from "./utils";

// import LineChartRe from "./LineChartRe";

// import generateRandomList from "./InfiniteScrollTable/test";

const DataVis = props => {
  const formed = props.table.data ? formatTable(props.table) : {};

  return props.table.data ? (
    <InfiniteScrollTable
      list={List(formed)}
      headers={props.table.headers.sort()}
    />
  ) : (
    ""
  );
};

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
