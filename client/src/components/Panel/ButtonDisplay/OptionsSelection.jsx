import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

import { setCurrentOptions } from "../../../store";

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

    if (currentTable) {
      axios
        .get(`/api/table/datausa/${currentTable}`)
        .then(res =>
          this.props.setCurrentOptions(allOptions[res.data.source.table])
        )
        .catch(err => console.log(err));
    }
  }

  handleClick(type) {
    const { selected } = this.state;
    let index = 0;

    const removeElement = (array, i) => {
      array[i] = array[array.length - 1];
      array.pop();
      return array;
    };
    const getIndex = (elem, column) => {
      if (elem === column) {
        return true;
      }
      index++;
      return false;
    };

    const update =
      selected.findIndex(elem => getIndex(elem, type)) !== -1
        ? removeElement(selected.slice(), index)
        : selected.concat([type]);

    index = 0;

    this.setState({ selected: update });
  }

  handleSubmit() {
    const { currentTable } = this.props;
    const { selected } = this.state;

    console.log("hit");

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
