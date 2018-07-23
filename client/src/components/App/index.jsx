import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./App.css";

import { chooseVisibilitySpinner } from "../../store";
import Information from "./Information";
import ToggleViews from "./ToggleViews";
import DataSource from "./DataSource";
import Footer from "./Footer";
import { Panel, Navbar, DataVis } from "../index";

const App = ({ table, visibility, chooseVisibilitySpinner }) => {
  const showToggle = table.data || table.error;

  return (
    <div className="app">
      <Navbar />
      <Panel />
      {showToggle && (
        <ToggleViews
          handleClick={chooseVisibilitySpinner}
          visibility={visibility.spinner}
        />
      )}
      {visibility.spinner ? (
        <div className="app-main">
          <DataVis />
          <DataSource />
          <Footer />
        </div>
      ) : (
        <div>
          <Information />
          <Footer />
        </div>
      )}
    </div>
  );
};
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
