import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";

import { chooseVisibilitySpinner } from "../../store";
import Information from "./Information";
import ToggleViews from "./ToggleViews";
import { Panel, DataSource, Navbar, DataVis } from "../index";

const App = ({ table, visibility, chooseVisibilitySpinner }) => (
  <div className="app">
    <Navbar />
    <Panel />
    {table.data && (
      <ToggleViews
        handleClick={chooseVisibilitySpinner}
        visibility={visibility.spinner}
      />
    )}
    {visibility.spinner ? (
      <div className="app-main">
        <DataVis />
        <DataSource />
      </div>
    ) : (
      <Information />
    )}
  </div>
);
App.defaultProps = {
  table: {},
  visibility: {},
  chooseVisibilitySpinner: () => {}
};

App.propTypes = {
  table: PropTypes.objectOf(PropTypes.any),
  visibility: PropTypes.objectOf(PropTypes.bool),
  chooseVisibilitySpinner: PropTypes.func
};

const mapStateToProps = state => ({
  table: state.table,
  visibility: state.visibility
});

const mapDispatchToProps = dispatch => ({
  chooseVisibilitySpinner: visibility =>
    dispatch(chooseVisibilitySpinner(visibility))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
