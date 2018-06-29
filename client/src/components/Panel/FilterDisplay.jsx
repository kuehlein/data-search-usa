import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addOrUpdate } from "../../utils";
import MapFields from "./IterableContent/MapFields";

// filter options for a table query
class FilterDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { currentTable } = this.props;

    // does not update when props are recieved
    if (currentTable !== nextProps.currentTable) {
      // if the table is changed, clear the currentOptions
      if (this.state.filters.length) {
        this.setState({ filters: [] });
      }
    }
  }

  handleChange(event, type) {
    const fieldState = {
      type: type,
      value: event.target.value
    };
    const nextState = addOrUpdate(this.state.filters, fieldState);

    this.setState({ filters: nextState });
  }

  render() {
    const { currentOptions, filterOptions, fields, where } = this.props;
    const { otherTables, sumlevel, year } = filterOptions;
    const propsAvailable =
      typeof fields !== "function"
        ? where
        : fields(otherTables, currentOptions, sumlevel, year);

    console.log("state", this.state.filters);

    return (
      <div className="d-flex flex-column justify-content-center">
        <MapFields handleChange={this.handleChange} template={propsAvailable} />
      </div>
    );
  }
}
FilterDisplay.defaultProps = {
  currentOptions: [],
  currentTable: "",
  filterOptions: {},
  fields: [],
  where: []
};

FilterDisplay.propTypes = {
  currentOptions: PropTypes.arrayOf(PropTypes.string),
  currentTable: PropTypes.string,
  filterOptions: PropTypes.objectOf(PropTypes.any),
  fields: PropTypes.any,
  where: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  currentOptions: state.currentOptions,
  currentTable: state.currentTable,
  filterOptions: state.filterOptions
});

export default connect(mapStateToProps)(FilterDisplay);

// make select fields work
// clear them on change
// clean up code
// track state in fields onChange
// set up search with filters
