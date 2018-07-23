import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";
import { Panel, DataSource, Navbar, DataVis, Information } from "../index";

const App = ({ visibility }) => (
  <div className="app">
    <Navbar />
    <Panel />
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
  visibility: {}
};

App.propTypes = {
  visibility: PropTypes.objectOf(PropTypes.bool)
};

const mapStateToProps = state => ({
  visibility: state.visibility
});

export default connect(mapStateToProps)(App);
