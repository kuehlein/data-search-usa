import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

// import createTable from './utils'
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
    // const level = table === 'geo' ? 'nation' : 'all'

    axios.get(`/api/table/datausa/${table}`) // /${level}
      .then(res => this.setState({ datausa: res.data }))
      .catch(err => console.log(err))
  }

  render () {
    const { datausa } = this.state
    console.log(datausa) // <----(DELETE)--------<<<

    const dataStatus = () => {
      if (datausa.headers) {
        return (
          <div>
            <p>data retrieved successfully</p>
            <p>dataset: { datausa.source.dataset }</p>
            <p>org: <a href={ `${datausa.source.link}` }>{ datausa.source.org }</a></p>
            <p>table: { datausa.source.table }</p>
          </div>
        )
      } else if (datausa.error) {
        return <p>this table is not available at this time</p>
      } else {
        return <p>please make a request</p>
      }
    }

    return (
      <div className="App-intro">
        { /* datausa.headers && createTable(datausa.headers, datausa.data) */ }
        <br />
        <br />
        <br />
        <br />
        {
          dataStatus()
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
