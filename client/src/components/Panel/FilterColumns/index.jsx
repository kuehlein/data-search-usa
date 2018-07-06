import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ColumnFilterFormat from "./ColumnFilterFormat";

import {
  clearCurrentFilterOptions,
  clearWhereStatements,
  clearColumn
} from "../../../store";
import { filterStateArr } from "./utils";

// component for managing state of number of columns being filtered
class FilterColumns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: {},
      filterNum: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTable !== nextProps.currentTable) {
      this.setState({
        columns: {},
        filterNum: 0
      });
      this.props.clearCurrentFilterOptions();
      this.props.clearWhereStatements();
    }
  }

  handleClick(canClick) {
    let numCopy = this.state.filterNum;

    if (!canClick) {
      this.setState({ filterNum: ++numCopy });
    }
  }

  handleChange(event, currentValue) {
    const { columns, filterNum } = this.state;
    const { value } = event.target;
    const newColumns = filterStateArr(columns, value, currentValue);

    this.setState({ columns: newColumns });

    if (columns.length > newColumns.length) {
      let numCopy = filterNum;
      this.setState({ filterNum: --numCopy });
    }
  }

  render() {
    const { currentColumns, clearColumn } = this.props;
    const { columns, filterNum } = this.state;

    return (
      <div>
        <ColumnFilterFormat
          columns={columns}
          filterNum={filterNum}
          currentColumns={currentColumns}
          clearColumn={clearColumn}
          handleClick={this.handleClick}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
FilterColumns.defaultProps = {
  currentTable: "",
  currentColumns: [""],
  clearCurrentFilterOptions: () => {},
  clearWhereStatements: () => {},
  clearColumn: () => {}
};

FilterColumns.propTypes = {
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  clearCurrentFilterOptions: PropTypes.func,
  clearWhereStatements: PropTypes.func,
  clearColumn: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentColumns: state.currentColumns
});

const mapDispatchToProps = dispatch => ({
  clearCurrentFilterOptions: () => dispatch(clearCurrentFilterOptions()),
  clearWhereStatements: () => dispatch(clearWhereStatements()),
  clearColumn: (oldColumn, newColumn) =>
    dispatch(clearColumn(oldColumn, newColumn))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterColumns);
