import React, { Component } from "react";
import PropTypes from "prop-types";

import SortableTree from "react-sortable-tree";

import "react-sortable-tree/style.css";
import "./SortableTree.css";

import { formatColumnsForTree, formatColumnsForState } from "../utils";

// map out filter fields
class DNDColumnOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      treeData: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { currentColumns } = this.props;

    // crop column names so that they fit in panel
    const cropped = currentColumns.map(
      str => (str.length > 23 ? `${str.slice(0, 24)}...` : str)
    );

    this.setState({ treeData: formatColumnsForTree(cropped) });
  }

  componentWillReceiveProps(nextProps) {
    // crop column names so that they fit in panel
    const cropped = nextProps.currentColumns.map(
      str => (str.length > 23 ? `${str.slice(0, 24)}...` : str)
    );

    this.setState({ treeData: formatColumnsForTree(cropped) });
  }

  handleChange(treeData) {
    const reformattedData = formatColumnsForState(treeData);

    this.setState({ treeData });

    this.props.changeOrderCurrentColumns(reformattedData);
  }

  render() {
    const divHeight = this.state.treeData.length * 62;

    return (
      <SortableTree
        style={{ height: divHeight }}
        className="sortable-tree sortable-tree-margin"
        treeData={this.state.treeData}
        maxDepth={0}
        onChange={e => this.handleChange(e)}
      />
    );
  }
}
DNDColumnOrder.defaultProps = {
  currentColumns: [""],
  changeOrderCurrentColumns: () => {}
};

DNDColumnOrder.propTypes = {
  currentColumns: PropTypes.arrayOf(PropTypes.string),
  changeOrderCurrentColumns: PropTypes.func
};

export default DNDColumnOrder;
