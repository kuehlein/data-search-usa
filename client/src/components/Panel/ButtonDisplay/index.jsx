import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { setTable } from '../../../store'


class ButtonDisplay extends Component {
  constructor() {
    super()
    this.state = {
      available: [],
      current: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    axios.get('/api/table/datausa')
      .then(res => this.setState({ available: res.data.data }))
      .catch(err => console.log(err))
  }

  componentWillReceiveProps (nextProps) {
    // const { table } = nextProps

    // axios.get(`/api/table/datausa/${table}`)
    //   .then(res => this.props.setOptions({ datausa: res.data }))
    //   .catch(err => console.log(err))
  }

  handleClick (type) {
    this.props.setTable(type)
    this.setState({ current: type })
  }

  render () {
    const { available } = this.state

    return (
      <div>
        {
          available &&
          available.map(category => (
            <button
              key={ category }
              onClick={ () => this.handleClick(category) }>
              {
                category
              }
            </button>
          ))
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setTable: table => dispatch(setTable(table))
})


export default connect(null, mapDispatchToProps)(ButtonDisplay)

// save buttons to db and retrieve their names


// how do i set a table, then the corresponding options in the store?
