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

  componentDidMount () {
    const { table } = this.props
    console.log('props', this.props)

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


export default connect(null)(Map)
