import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { newWhereStatement } from "../../../../store";

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
  disable: true,
  newWhereStatement: () => {}
};

MapInput.propTypes = {
  field: PropTypes.any,
  column: PropTypes.string,
  disable: PropTypes.bool,
  newWhereStatement: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  newWhereStatement: (column, name, value) =>
    dispatch(newWhereStatement(column, name, value))
});

export default connect(
  null,
  mapDispatchToProps
)(MapInput);
