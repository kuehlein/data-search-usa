import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";
import { Panel, Map, Navbar, DataVis } from "../index";

const App = ({ visibility }) => (
  <div>
    {/* <Navbar /> */}
    <Panel />
    {visibility.spinner && <DataVis />}
    {/* <Map /> */}
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

// hide datavis when until go is clicked
