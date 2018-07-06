import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { newWhereColumn, newWhereStatement } from "../../../store";

// flesh out the appropriate options for filtering
class MapInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.column !== nextProps.column) {
      this.props.newWhereColumn(nextProps.column);
    }

    if (this.props.currentTable !== nextProps.currentTable) {
      this.setState({ value: "" });
    }
  }

  handleChange(event, field, column) {
    const { newWhereStatement } = this.props;

    this.setState({ value: event.target.value });
    newWhereStatement(column, field, event.target.value);
  }

  render() {
    const { field, column, disable } = this.props;

    return (
      <div>
        <label htmlFor={field.name}>
          {field.name}
          <input
            type="text"
            name={field.name}
            title={field.description}
            value={disable ? "" : this.state.value}
            onChange={e => this.handleChange(e, field.name, column)}
            disabled={disable}
          />
        </label>
      </div>
    );
  }
}
MapInput.defaultProps = {
  field: [],
  column: "",
  currentTable: "",
  disable: true,
  newWhereColumn: () => {},
  newWhereStatement: () => {}
};

MapInput.propTypes = {
  field: PropTypes.any,
  column: PropTypes.string,
  currentTable: PropTypes.string,
  disable: PropTypes.bool,
  newWhereColumn: PropTypes.func,
  newWhereStatement: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable
});

const mapDispatchToProps = dispatch => ({
  newWhereColumn: column => dispatch(newWhereColumn(column)),
  newWhereStatement: (column, name, value) =>
    dispatch(newWhereStatement(column, name, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapInput);
