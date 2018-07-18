import * as React from "react";
import PropTypes from "prop-types";
import { AutoSizer, Column, Table, SortDirection } from "react-virtualized";

import "./Table.css";

class VirtualTable extends React.PureComponent {
  constructor(props) {
    super(props);

    const sortBy = "index";
    const sortDirection = SortDirection.ASC;
    const sortedList = this._sortList({ sortBy, sortDirection });

    this.state = {
      disableHeader: false,
      headerHeight: 30,
      height: 270,
      overscanRowCount: 10,
      rowHeight: 40,
      rowCount: 1,
      scrollToIndex: undefined,
      sortBy,
      sortDirection,
      sortedList
    };

    this._noRowsRenderer = this._noRowsRenderer.bind(this);
    this._onRowCountChange = this._onRowCountChange.bind(this);
    this._onScrollToRowChange = this._onScrollToRowChange.bind(this);
    this._rowClassName = this._rowClassName.bind(this);
    this._sort = this._sort.bind(this);
  }

  componentDidMount() {
    this.setState({ rowCount: this.props.list.size });
  }

  _getDatum(list, index) {
    return list.get(index % list.size);
  }

  _isSortEnabled() {
    const { list } = this.props;
    const { rowCount } = this.state;

    return rowCount <= list.size;
  }

  _noRowsRenderer() {
    return <div className="noRows">No rows</div>;
  }

  _onRowCountChange(event) {
    const rowCount = parseInt(event.target.value, 10) || 0;

    this.setState({ rowCount });
  }

  _onScrollToRowChange(event) {
    const { rowCount } = this.state;
    let scrollToIndex = Math.min(
      rowCount - 1,
      parseInt(event.target.value, 10)
    );

    if (isNaN(scrollToIndex)) {
      scrollToIndex = undefined;
    }

    this.setState({ scrollToIndex });
  }

  _rowClassName({ index }) {
    if (index < 0) {
      return "headerRow";
    } else {
      return index % 2 === 0 ? "evenRow" : "oddRow";
    }
  }

  _sort({ sortBy, sortDirection }) {
    const sortedList = this._sortList({ sortBy, sortDirection });

    this.setState({ sortBy, sortDirection, sortedList });
  }

  _sortList({ sortBy, sortDirection }) {
    const { list } = this.props;

    return list
      .sortBy(item => item[sortBy])
      .update(
        list => (sortDirection === SortDirection.DESC ? list.reverse() : list)
      );
  }

  render() {
    const {
      disableHeader,
      headerHeight,
      height,
      overscanRowCount,
      rowHeight,
      rowCount,
      scrollToIndex,
      sortBy,
      sortDirection,
      sortedList
    } = this.state;

    const rowGetter = ({ index }) => this._getDatum(sortedList, index);

    return (
      <div>
        <AutoSizer disableHeight>
          {({ width }) => (
            <Table
              ref="Table"
              disableHeader={disableHeader}
              headerClassName="headerColumn"
              headerHeight={headerHeight}
              height={height}
              noRowsRenderer={this._noRowsRenderer}
              overscanRowCount={overscanRowCount}
              rowClassName={this._rowClassName}
              rowHeight={rowHeight}
              rowGetter={rowGetter}
              rowCount={rowCount}
              scrollToIndex={scrollToIndex}
              sort={this._sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              width={width}
              // ------------------------
              onRowsRendered={this.props.onRowsRendered}
              // rowRenderer={this.props.rowRenderer}
            >
              <Column
                label="Index"
                cellDataGetter={({ rowData }) => rowData.index}
                dataKey="index"
                disableSort={!this._isSortEnabled()}
                width={150}
              />
              {this.props.headers.map((column, i) => (
                <Column
                  key={i}
                  label={column}
                  // cellRenderer={({ cellData }) => cellData}
                  dataKey={column}
                  width={300}
                  cellRenderer={this.props.cellRenderer}
                />
              ))}
            </Table>
          )}
        </AutoSizer>
        <label
          htmlFor="Scroll to"
          className="labeledInput label"
          title="Scroll to"
        >
          Scroll to
          <input
            aria-label="Scroll to"
            className="input"
            name="onScrollToRow"
            placeholder="Index..."
            onChange={this._onScrollToRowChange}
            value={scrollToIndex || ""}
          />
        </label>
      </div>
    );
  }
}
VirtualTable.defaultProps = {
  list: {},
  headers: [""],
  onRowsRendered: () => null,
  cellRenderer: () => {}
};

VirtualTable.propTypes = {
  list: PropTypes.objectOf(PropTypes.any),
  headers: PropTypes.arrayOf(PropTypes.string),
  onRowsRendered: PropTypes.func,
  cellRenderer: PropTypes.func
};

export default VirtualTable;
