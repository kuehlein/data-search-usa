import React, { Component } from "react";
import PropTypes from "prop-types";
import { InfiniteLoader } from "react-virtualized";

import VirtualTable from "./VirtualTable";

import "./Table.css";

// hasNextPage: Are there more items to load?
// isNextPageLoading: Are we currently loading a page of items?
// list: List of items loaded so far
// loadNextPage: Callback function to load the next page of items

class InfiniteScrollTable extends Component {
  constructor(props) {
    super(props);
    const { hasNextPage, list } = this.props;

    this.state = {
      scrollToIndex: undefined,
      rowCount: hasNextPage ? list.size + 1 : list.size
    };

    this.handleScroll = this.handleScroll.bind(this);
    this._cellRenderer = this._cellRenderer.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.list.size < nextProps.list.size) {
      const nextListSize =
        nextProps.hasNextPage && nextProps.size !== nextProps.list.size
          ? nextProps.list.size + 1
          : nextProps.list.size;

      this.setState({ rowCount: nextListSize });
    }
  }

  handleScroll(newIndex, newTotal) {
    this.setState({ scrollToIndex: newIndex });

    if (typeof newTotal !== "undefined") {
      this.setState({ rowCount: newTotal });
      this.forceUpdate();
    }
  }

  // Render a list item or a loading indicator.
  _cellRenderer(cellData) {
    if (cellData.isScrolling) {
      return <div key={cellData.dataKey}>...</div>;
    }
    return <div key={cellData.dataKey}>{cellData.cellData}</div>;
  }

  render() {
    const {
      hasNextPage,
      isNextPageLoading,
      list,
      loadNextPage,
      headers,
      size
    } = this.props;

    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    // const rowCount = hasNextPage ? list.size + 1 : list.size;

    // Only load 1 page of items at a time.
    // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
    const loadMoreRows = isNextPageLoading ? () => {} : loadNextPage;

    // Every row is loaded except for our loading indicator row.
    const isRowLoaded = ({ index }) => !hasNextPage || index < list.size;

    // choose new size of table if user chooses a higher index
    const nextRows =
      this.state.scrollToIndex > this.state.rowCount
        ? this.state.scrollToIndex
        : this.state.rowCount;

    return (
      <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows(this.state.scrollToIndex)}
        rowCount={this.state.rowCount}
      >
        {({ onRowsRendered, registerChild }) => (
          <VirtualTable
            ref={registerChild}
            onRowsRendered={onRowsRendered}
            cellRenderer={this._cellRenderer}
            list={list}
            headers={headers}
            rowCount={nextRows}
            handleScroll={this.handleScroll}
            scrollToIndex={this.state.scrollToIndex}
            size={size}
          />
        )}
      </InfiniteLoader>
    );
  }
}
InfiniteScrollTable.defaultProps = {
  hasNextPage: false,
  isNextPageLoading: false,
  list: {},
  loadNextPage: () => {},
  headers: [""],
  size: 0
};

InfiniteScrollTable.propTypes = {
  hasNextPage: PropTypes.bool,
  isNextPageLoading: PropTypes.bool,
  list: PropTypes.objectOf(PropTypes.any),
  loadNextPage: PropTypes.func,
  headers: PropTypes.arrayOf(PropTypes.string),
  size: PropTypes.number
};

export default InfiniteScrollTable;
