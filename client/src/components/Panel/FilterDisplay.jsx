import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MapFields from "./IterableContent//MapFields";

// filter options for a table query
class FilterDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { currentOptions } = this.props;

    // does not update when props are recieved
    if (currentOptions !== nextProps.currentOptions) {
      // fetchCurrentOptions(currentTable, allOptions);

      // if the table is changed, clear the currentOptions
      if (this.state.filters.length) {
        this.setState({ filters: [] });
      }
    }
  }

  handleClick(type) {
    // this.setState({ filters: this.state.filters.concat([type]) });
  }

  render() {
    const { currentOptions, filterOptions, fields, where } = this.props;
    const { otherTables, sumlevel, year } = filterOptions;
    const propsAvailable =
      typeof fields !== "function"
        ? where
        : fields(otherTables, currentOptions, sumlevel, year);

    return (
      <div className="d-flex flex-column justify-content-center">
        <MapFields
          /* handleClick={() => this.handleClick()} */
          template={propsAvailable}
        />
      </div>
    );
  }
}
FilterDisplay.defaultProps = {
  currentOptions: [],
  filterOptions: {},
  fields: [],
  where: []
};

FilterDisplay.propTypes = {
  currentOptions: PropTypes.arrayOf(PropTypes.object),
  filterOptions: PropTypes.objectOf(PropTypes.any),
  fields: PropTypes.any,
  where: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  currentOptions: state.currentOptions,
  filterOptions: state.filterOptions
});

export default connect(mapStateToProps)(FilterDisplay);

// make select fields work
// clear them on change
// clean up code
// track state in fields onChange
// set up search with filters
