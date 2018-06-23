import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

import { setCurrentOptions } from "../../../store";

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
    const { currentTable, allOptions } = nextProps;

    // if a table is selected, make a request to the api to determine
    // the specific table and cross reference it agaisnt allOptions
    // to see which columns are available in the table
    if (currentTable) {
      axios
        .get(`/api/table/datausa/${currentTable}`)
        .then(
          res =>
            res.data.error
              ? this.props.setCurrentOptions([
                  "THIS TABLE IS CURRENTLY UNAVAILABLE"
                ])
              : this.props.setCurrentOptions(allOptions[res.data.source.table])
        )
        .catch(err => console.log(err));
    }

    // if the selected table is changed, clear the currentOptions
    // used for that table
    if (nextProps.currentTable !== this.props.currentTable) {
      this.setState({ selected: [] });
      this.props.setCurrentOptions([]);
    }
  }

  handleClick(type) {
    const copy = this.state.selected.slice();

    // check to see if a search option is selected on local state
    // if so, remove it, if not, add it
    const addOrRemove = (arr, column) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === column) {
          arr[i] = arr[arr.length - 1];
          arr.pop();
          return arr;
        }
      }
      arr.push(column);
      return arr;
    };

    this.setState({ selected: addOrRemove(copy, type) });
  }

  handleSubmit() {
    const { currentTable } = this.props;
    const { selected } = this.state;

    console.log("hit");

    // make a request for the currentTable with the selected options
    axios
      .get(`/api/table/datausa/${currentTable}/${selected}`)
      .then(res => res) // ?
      .catch(err => console.log(err));
  }

  render() {
    const { currentOptions } = this.props;
    console.log(this.state.selected);

    return (
      <div>
        {currentOptions &&
          currentOptions.map(column => (
            <button key={column} onClick={() => this.handleClick(column)}>
              {column}
            </button>
          ))}
        <br />
        <button onSubmit={() => this.handleSubmit()}>Go!</button>
      </div>
    );
  }
}
OptionsSelection.defaultProps = {
  currentTable: "",
  allOptions: {},
  currentOptions: [],
  setCurrentOptions: []
};

OptionsSelection.propTypes = {
  currentTable: PropTypes.string,
  allOptions: PropTypes.objectOf(PropTypes.array),
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  setCurrentOptions: PropTypes.func
};

const mapStateToProps = state => ({
  currentTable: state.currentTable,
  allOptions: state.allOptions,
  currentOptions: state.currentOptions
});

const mapDispatchToProps = dispatch => ({
  setCurrentOptions: currentOptions =>
    dispatch(setCurrentOptions(currentOptions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsSelection);

// make currentOptions clear when currentTable changes
// mess with map's state to fix request
