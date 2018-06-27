import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import MapButtons from "./MapButtons";
import { addOrRemove } from "../../../utils";
import {
  setCurrentOptions,
  fetchCurrentOptions,
  fetchTable
} from "../../../store";

// when a table is selected, display the search options as buttons
class OptionsSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchCurrentOptions, setCurrentOptions, allOptions } = this.props;
    const { currentTable } = nextProps;

    if (currentTable !== this.props.currentTable) {
      fetchCurrentOptions(currentTable, allOptions);

      // if the table is changed, clear the currentOptions
      if (this.state.selected.length) {
        this.setState({ selected: [] });
        setCurrentOptions([]);
      }
    }
  }

  handleClick(type) {
    const copyOfSelected = this.state.selected.slice();

    this.setState({ selected: addOrRemove(copyOfSelected, type) });
  }

  render() {
    const { currentOptions, fetchTable, currentTable } = this.props;
    const { selected } = this.state;
    console.log(this.state.selected); // <------(DELETE)---<<<

    return (
      <div className="d-flex flex-column justify-content-center">
        <MapButtons
          handleClick={this.handleClick}
          currentOptions={currentOptions}
        />
        <br />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => fetchTable(currentTable, selected)}
        >
          Go!
        </button>
      </div>
    );
  }
}
OptionsSelection.defaultProps = {
  currentTable: "",
  currentOptions: [],
  allOptions: {},
  setCurrentOptions: [],
  fetchCurrentOptions: () => {},
  fetchTable: {}
};

OptionsSelection.propTypes = {
  currentTable: PropTypes.string,
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  allOptions: PropTypes.objectOf(PropTypes.array),
  setCurrentOptions: PropTypes.func,
  fetchCurrentOptions: PropTypes.func,
  fetchTable: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  currentOptions: state.currentOptions,
  allOptions: state.allOptions
});

const mapDispatchToProps = dispatch => ({
  setCurrentOptions: currentOptions =>
    dispatch(setCurrentOptions(currentOptions)),
  fetchCurrentOptions: (nextTable, nextOptions, removeTableUtil) =>
    dispatch(fetchCurrentOptions(nextTable, nextOptions, removeTableUtil)),
  fetchTable: (currentTable, selected) =>
    dispatch(fetchTable(currentTable, selected))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsSelection);
