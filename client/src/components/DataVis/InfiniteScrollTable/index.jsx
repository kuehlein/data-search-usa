import React from "react";
import PropTypes from "prop-types";
import { InfiniteLoader } from "react-virtualized";

import VirtualTable from "./VirtualTable";

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
  const rowRenderer = ({ index, key, style }) => {
    let content;

    if (!isRowLoaded({ index })) {
      content = "Loading...";
    } else {
      content = list.getIn([index, "name"]);
    }

    return (
      <div key={key} style={style}>
        {content}
      </div>
    );
  };

  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={rowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <VirtualTable
          ref={registerChild} // ??
          onRowsRendered={onRowsRendered} // ??
          rowRenderer={rowRenderer} // ??
          list={list}
          headers={headers}
        />
      )}
    </InfiniteLoader>
  );
};
InfiniteScrollTable.defaultProps = {
  list: {},
  headers: [""]
};

InfiniteScrollTable.propTypes = {
  list: PropTypes.objectOf(PropTypes.any),
  headers: PropTypes.arrayOf(PropTypes.string)
};

export default InfiniteScrollTable;
