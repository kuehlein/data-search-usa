import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ColumnFilterFormat from "./ColumnFilterFormat";

import {
  clearCurrentFilterOptions,
  clearWhereStatements,
  updateColumn,
  newWhereColumn
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
    const { columns } = this.state;
    const { value } = event.target;
    const newColumns = filterStateArr(columns, value, currentValue);

    this.setState({ columns: newColumns });
  }

  render() {
    const { currentColumns, updateColumn, newWhereColumn } = this.props;
    const { columns, filterNum } = this.state;

    return (
      <div>
        <ColumnFilterFormat
          columns={columns}
          filterNum={filterNum}
          currentColumns={currentColumns}
          updateColumn={updateColumn}
          newWhereColumn={newWhereColumn}
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
  updateColumn: () => {},
  newWhereColumn: () => {}
};

FilterColumns.propTypes = {
  currentTable: PropTypes.string,
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  clearCurrentFilterOptions: PropTypes.func,
  clearWhereStatements: PropTypes.func,
  updateColumn: PropTypes.func,
  newWhereColumn: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentColumns: state.currentColumns
});

const mapDispatchToProps = dispatch => ({
  clearCurrentFilterOptions: () => dispatch(clearCurrentFilterOptions()),
  clearWhereStatements: () => dispatch(clearWhereStatements()),
  updateColumn: (oldColumn, newColumn) =>
    dispatch(updateColumn(oldColumn, newColumn)),

  newWhereColumn: column => dispatch(newWhereColumn(column))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterColumns);
