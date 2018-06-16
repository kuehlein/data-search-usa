import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import createTable from './utils'
import './Map.css'


class Map extends Component {
  constructor() {
    super()
    this.state = {
      datausa: {}
    }
  }

  componentWillReceiveProps (nextProps) {
    const { table } = nextProps

    axios.get(`/api/table/datausa/${table}`)
      .then(res => this.setState({ datausa: res.data }))
      .catch(err => console.log(err))
  }

  render () {
    const { datausa } = this.state

    return (
      <div className="App-intro">
        { datausa.headers && createTable(datausa.headers, datausa.data) }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  table: state.table
})


export default connect(mapStateToProps)(Map)
