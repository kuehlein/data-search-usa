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
      overscanRowCount: 15,
      rowHeight: 40,
      rowCount: this.props.rowCount,
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

  componentWillReceiveProps(nextProps) {
    if (this.props.rowCount !== nextProps.rowCount) {
      const { sortBy, sortDirection } = this.state;
      const nextList = this._sortList(
        { sortBy, sortDirection },
        nextProps.list
      );

      this.setState({ rowCount: nextProps.rowCount, sortedList: nextList });
    }

    if (
      nextProps.scrollToIndex === this.state.scrollToIndex &&
      typeof nextProps.scrollToIndex !== "undefined"
    ) {
      this.props.handleScroll(undefined);
    }
  }

  _getDatum(list, index) {
    return list.get(index % list.size);
  }

  _noRowsRenderer() {
    return <div className="noRows">No rows</div>;
  }

  _onRowCountChange(event) {
    const rowCount = parseInt(event.target.value, 10) || 0;

    this.setState({ rowCount });
  }

  _onScrollToRowChange(event) {
    const index = +event.target.value;

    if (!Number.isNaN(index)) {
      this.setState({ scrollToIndex: index });

      if (index < this.state.rowCount) {
        this.props.handleScroll(index);
      } else {
        this.props.handleScroll(index, index + 15);
      }
    }
  }

  _rowClassName({ index }) {
    if (index < 0) {
      return "headerRow";
    }
    return index % 2 === 0 ? "evenRow" : "oddRow";
  }

  _sort({ sortBy, sortDirection }) {
    const sortedList = this._sortList({ sortBy, sortDirection });

    this.setState({ sortBy, sortDirection, sortedList });
  }

  _sortList({ sortBy, sortDirection }, nextList) {
    const { list } = this.props;
    const listToUse = nextList || list;

    return listToUse
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

    console.log("rowCount", rowCount);

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
              onRowsRendered={this.props.onRowsRendered}
            >
              <Column
                label="Index"
                cellDataGetter={({ rowData }) => rowData.index}
                dataKey="index"
                width={150}
              />
              {this.props.headers.map((column, i) => (
                <Column
                  key={i}
                  label={column}
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
  cellRenderer: () => {},
  rowCount: 1,
  handleScroll: () => {},
  scrollToIndex: undefined
};

VirtualTable.propTypes = {
  list: PropTypes.objectOf(PropTypes.any),
  headers: PropTypes.arrayOf(PropTypes.string),
  onRowsRendered: PropTypes.func,
  cellRenderer: PropTypes.func,
  rowCount: PropTypes.number,
  handleScroll: PropTypes.func,
  scrollToIndex: PropTypes.number
};

export default VirtualTable;
