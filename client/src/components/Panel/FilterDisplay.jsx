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
    const { fields, where } = this.props;
    const propsAvailable = fields.length ? fields : where;

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
  fields: [],
  where: []
};

FilterDisplay.propTypes = {
  currentOptions: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.arrayOf(PropTypes.object),
  where: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = state => ({
  currentOptions: state.currentOptions
});

export default connect(mapStateToProps)(FilterDisplay);

// make select fields work
// clear them on change
// clean up code
// track state in fields onChange
// set up search with filters
