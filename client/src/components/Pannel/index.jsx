import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTable } from '../../store'
import logo from '../../assets/logo.svg'
import './Pannel.css'


class Pannel extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (type) {
    this.props.setTable(type)
  }

  render () {
    return (
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <div>
          <button onClick={ () => this.handleClick('cip') }>cip</button>
          <button onClick={ () => this.handleClick('geo') }>geo</button>
          <button onClick={ () => this.handleClick('naics') }>naics</button>
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setTable: type => dispatch(setTable(type))
})


export default connect(null, mapDispatchToProps)(Pannel)
