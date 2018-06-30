import React, { Component } from "react";
import PropTypes from "prop-types";
import FieldSelect from "./FieldSelect";

// flesh out the appropriate options for filtering
class MapFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleFields = this.handleFields.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentTable !== nextProps.currentTable) {
      this.setState({ value: "" });
    }
  }

  handleFields(event, field) {
    this.setState({ value: event.target.value });

    if (field) {
      this.props.handleChange(event, field.type);
    }
  }

  render() {
    const { field } = this.props;

    return (
      <div>
        <label htmlFor={field.name}>
          {field.name}
          {Array.isArray(field.field) ? (
            <FieldSelect
              field={field}
              handleChange={this.handleFields}
              value={this.state.value}
            />
          ) : (
            <input
              type="text"
              name={field.name}
              title={field.description}
              value={this.state.value}
              onChange={e => this.handleFields(e)}
            />
          )}
        </label>
      </div>
    );
  }
}
MapFields.defaultProps = {
  field: [],
  handleChange: () => {},
  currentTable: ""
};

MapFields.propTypes = {
  field: PropTypes.any,
  handleChange: PropTypes.func,
  currentTable: PropTypes.string
};

export default MapFields;
