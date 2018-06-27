import React, { Component } from "react";
import { connect } from "react-redux";

import { fields, where } from "./fieldTemplate";
import MapFields from "./MapFields";

// filter options for a table query
class FieldDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {}

  handleClick(type) {}

  render() {
    return (
      <div className="d-flex flex-column justify-content-center">
        <MapFields handleClick={() => this.handleClick()} fields={fields} />

        {/* select for column, then open below */}
        <MapFields handleClick={() => this.handleClick()} where={where} />
        {/* add another? */}
      </div>
    );
  }
}
FieldDisplay.defaultProps = {};

FieldDisplay.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldDisplay);
