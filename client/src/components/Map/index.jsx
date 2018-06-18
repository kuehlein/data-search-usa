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
    const level = table === 'geo' ? 'nation' : 'all'

    axios.get(`/api/table/datausa/${table}`) // /${level}
      .then(res => this.setState({ datausa: res.data }))
      .catch(err => console.log(err))
  }

  render () {
    const { datausa } = this.state
    console.log(datausa) // <----(DELETE)--------<<<

    return (
      <div className="App-intro">
        { /* datausa.headers && createTable(datausa.headers, datausa.data) */ }
        <br />
        <br />
        <br />
        <br />
        {
          datausa.headers
            && 'data retrieved successfully' ||
          datausa.error
            && 'this table is not available at this time' ||
          'please make a request'
        } {
            datausa.source &&
            <div>
              <p>dataset: { datausa.source.dataset }</p>
              <p>org: <a href={ `${datausa.source.link}` }>{ datausa.source.org }</a></p>
              <p>table: { datausa.source.table }</p>
            </div>
        }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  table: state.table
})


export default connect(mapStateToProps)(Map)


// victory charts
