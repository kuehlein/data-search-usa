import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List } from "immutable";

import InfiniteScrollTable from "./InfiniteScrollTable";
import Spinner from "./InfiniteScrollTable/Spinner";
import { fetchNewRows } from "../../store";

const DataVis = ({ table, fetchNewRows }) =>
  table.data ? (
    <InfiniteScrollTable
      hasNextPage={table.size > table.data.length}
      list={List(table.data)}
      loadNextPage={fetchNewRows}
      headers={table.headers}
      size={table.size}
    />
  ) : (
    <Spinner error={table.error} />
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
  fetchNewRows: index => table => dispatch(fetchNewRows(index, table))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataVis);
