import React, { Component } from "react";
import PropTypes from "prop-types";

import "react-sortable-tree/style.css";
import SortableTree from "react-sortable-tree";

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

    this.setState({ treeData: formatColumnsForTree(currentColumns) });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ treeData: formatColumnsForTree(nextProps.currentColumns) });
  }

  handleChange(treeData) {
    const reformattedData = formatColumnsForState(treeData);

    this.setState({ treeData });

    this.props.changeOrderCurrentColumns(reformattedData);
  }

  render() {
    const divHeight = this.state.treeData.length * 62;

    return (
      <div style={{ height: divHeight, width: 420 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={e => this.handleChange(e)}
        />
      </div>
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
