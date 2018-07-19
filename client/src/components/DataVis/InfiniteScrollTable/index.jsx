import React from "react";
import PropTypes from "prop-types";
import { InfiniteLoader } from "react-virtualized";

import VirtualTable from "./VirtualTable";

import "./Table.css";
import table from "../../../store/table";

// hasNextPage: Are there more items to load?
// isNextPageLoading: Are we currently loading a page of items?
// list: List of items loaded so far
// loadNextPage: Callback function to load the next page of items

const InfiniteScrollTable = ({
  hasNextPage,
  isNextPageLoading,
  list,
  loadNextPage,
  headers
}) => {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const rowCount = hasNextPage ? list.size + 1 : list.size;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreRows = isNextPageLoading ? () => {} : loadNextPage;

  // Every row is loaded except for our loading indicator row.
  const isRowLoaded = ({ index }) => !hasNextPage || index < list.size;

  // Render a list item or a loading indicator.
  const cellRenderer = cellData => {
    if (cellData.isScrolling) {
      return <div key={cellData.dataKey}>...</div>;
    }

    return <div key={cellData.dataKey}>{cellData.cellData}</div>;
  };

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <VirtualTable
          ref={registerChild}
          onRowsRendered={onRowsRendered}
          cellRenderer={cellRenderer}
          list={list}
          headers={headers}
          rowCount={rowCount}
        />
      )}
    </InfiniteLoader>
  );
};
InfiniteScrollTable.defaultProps = {
  hasNextPage: false,
  isNextPageLoading: false,
  list: {},
  loadNextPage: () => {},
  headers: [""]
};

InfiniteScrollTable.propTypes = {
  hasNextPage: PropTypes.bool,
  isNextPageLoading: PropTypes.bool,
  list: PropTypes.objectOf(PropTypes.any),
  loadNextPage: PropTypes.func,
  headers: PropTypes.arrayOf(PropTypes.string)
};

export default InfiniteScrollTable;
