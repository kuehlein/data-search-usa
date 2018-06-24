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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchCurrentOptions, setCurrentOptions, allOptions } = this.props;
    const { currentTable } = nextProps;

    // find the options for the table selected
    if (currentTable !== this.props.currentTable) {
      fetchCurrentOptions(currentTable, allOptions);

      // if the selected table is changed, clear the
      // currentOptions used for that table
      if (this.state.selected.length) {
        this.setState({ selected: [] });
        setCurrentOptions([]);
      }
    }
  }

  handleClick(type) {
    const copyOfSelected = this.state.selected.slice();

    // check to see if a search option is selected
    // on local state if so, remove it, if not, add it
    this.setState({ selected: addOrRemove(copyOfSelected, type) });
  }

  handleSubmit() {
    const { fetchTable, currentTable } = this.props;
    const { selected } = this.state;

    console.log("submit hit");

    // make a request for the currentTable with the selected options
    fetchTable(currentTable, selected);
  }

  render() {
    const { currentOptions } = this.props;
    console.log(this.state.selected); // <------(DELETE)---<<<

    return (
      <div>
        <MapButtons
          handleClick={this.handleClick}
          currentOptions={currentOptions}
        />
        <br />
        <button onSubmit={() => this.handleSubmit()}>Go!</button>
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
