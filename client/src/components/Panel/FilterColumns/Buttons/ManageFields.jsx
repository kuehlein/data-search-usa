import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapFields from "../Iterables/MapFields";

import { where } from "../Templates/filterColumnTemplate";
import { newWhereColumn } from "../../../../store";

// filter options for a column query
class ManageFields extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.column !== nextProps.column) {
      this.props.newWhereColumn(nextProps.column);
    }
  }

  render() {
    const { column, value } = this.props;

    return (
      <div className="d-flex flex-column justify-content-center">
        <MapFields template={where} column={column} disable={!value} />
      </div>
    );
  }
}
ManageFields.defaultProps = {
  column: "",
  value: "",
  newWhereColumn: () => {}
};

ManageFields.propTypes = {
  column: PropTypes.string,
  value: PropTypes.string,
  newWhereColumn: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  newWhereColumn: column => dispatch(newWhereColumn(column))
});

export default connect(
  null,
  mapDispatchToProps
)(ManageFields);
