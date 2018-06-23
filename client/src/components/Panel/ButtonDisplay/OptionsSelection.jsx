import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

import { setAllTables, setCurrentOptions } from "../../../store";

const removeFromArray = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = arr[arr.length - 1];
      arr.pop();
      return arr;
    }
  }
  return arr;
};

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
    // const { currentTable, allOptions } = nextProps;
    const { allTables, setCurrentOptions, setAllTables } = this.props;

    // remove current table from all tables
    // if the table is unavailable from datausa
    const removeMissingTable = () => {
      const copyOfAllTables = allTables.slice();

      removeFromArray(copyOfAllTables, this.props.currentTable);
      copyOfAllTables.sort();

      setCurrentOptions(["THIS TABLE IS CURRENTLY UNAVAILABLE"]);
      setAllTables(copyOfAllTables);
    };

    // if a table is selected, make a request to the api to determine
    // the specific table and cross reference it agaisnt allOptions
    // to see which columns are available in the table
    if (nextProps.currentTable !== this.props.currentTable) {
      axios
        .get(`/api/table/datausa/${nextProps.currentTable}`)
        .then(
          res =>
            res.data.error
              ? removeMissingTable(
                  allTables,
                  this.props.currentTable,
                  setCurrentOptions,
                  setAllTables
                )
              : this.props.setCurrentOptions(
                  nextProps.allOptions[res.data.source.table]
                )
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
    const copyOfSelected = this.state.selected.slice();

    // check to see if a search option is selected on local state
    // if so, remove it, if not, add it
    const addOrRemove = (arr, column) => {
      const length = arr.length;

      removeFromArray(arr, column);
      if (arr.length === length) arr.push(column);
      return arr;
    };

    this.setState({ selected: addOrRemove(copyOfSelected, type) });
  }

  handleSubmit() {
    const { currentTable } = this.props;
    const { selected } = this.state;

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
  allTables: [],
  currentTable: "",
  allOptions: {},
  currentOptions: [],
  setCurrentOptions: [],
  setAllTables: []
};

OptionsSelection.propTypes = {
  allTables: PropTypes.arrayOf(PropTypes.string),
  currentTable: PropTypes.string,
  allOptions: PropTypes.objectOf(PropTypes.array),
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  setCurrentOptions: PropTypes.func,
  setAllTables: PropTypes.func
};

const mapStateToProps = state => ({
  allTables: state.allTables,
  currentTable: state.currentTable,
  allOptions: state.allOptions,
  currentOptions: state.currentOptions
});

const mapDispatchToProps = dispatch => ({
  setAllTables: allTables => dispatch(setAllTables(allTables)),
  setCurrentOptions: currentOptions =>
    dispatch(setCurrentOptions(currentOptions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionsSelection);
