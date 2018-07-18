import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "immutable";

import InfiniteScrollTable from "./InfiniteScrollTable";
import { fetchNewRows } from "../../store";

const DataVis = ({ table, fetchNewRows }) =>
  table.data ? (
    <InfiniteScrollTable
      hasNextPage={table.size > table.data.length}
      isNextPageLoading={table.isLoading}
      list={List(table.data)}
      loadNextPage={fetchNewRows}
      headers={table.headers}
    />
  ) : (
    ""
  );
DataVis.defaultProps = {
  table: {},
  fetchNewRows: () => {}
};

DataVis.propTypes = {
  table: PropTypes.objectOf(PropTypes.any),
  fetchNewRows: PropTypes.func
};

const mapStateToProps = state => ({
  table: state.table
});

const mapDispatchToProps = dispatch => ({
  fetchNewRows: newRows => dispatch(fetchNewRows(newRows))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataVis);
