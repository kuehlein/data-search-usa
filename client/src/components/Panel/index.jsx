import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Panel.css";

import ChooseTable from "./ChooseTable";
import FilterTable from "./FilterTable";
import ChooseColumns from "./ChooseColumns";
import FilterColumns from "./FilterColumns";
import GoButton from "./GoButton";

// the presentaional component for the control panel
class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldDisable: true
    };
    this.handleColumnValue = this.handleColumnValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentColumns.length === nextProps.whereStatements.length) {
      this.setState({ shouldDisable: true });
    } else {
      this.setState({ shouldDisable: false });
    }
    if (this.state.unselected) {
      console.log("disable");
    }
  }

  handleColumnValue(emptySet) {
    this.setState({ shouldDisable: emptySet });
  }

  render() {
    return (
      <div
        className="jumbotron btn-group container-fluid flex-column pt-4"
        role="group"
      >
        <ChooseTable />
        <FilterTable />
        <ChooseColumns />
        <FilterColumns
          handleColumnValue={this.handleColumnValue}
          shouldDisable={this.state.shouldDisable}
        />
        <GoButton />
      </div>
    );
  }
}
Panel.defaultProps = {
  currentColumns: [],
  whereStatements: []
};

Panel.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  whereStatements: PropTypes.arrayOf(PropTypes.any)
};

const mapStateToProps = state => ({
  currentColumns: state.currentColumns,
  whereStatements: state.whereStatements
});

export default connect(mapStateToProps)(Panel);
