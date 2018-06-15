import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import { Pannel, Map } from '../index'


class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <Pannel />
        <Map table={ this.state.table } /> { /* send props to trigger reload */ }
      </div>
    )
  }

}

const mapStateToProps = state => ({
  table: state.table
})


export default connect(mapStateToProps)(App)

/*
 * Classification of Instructional Programs:
 * ?show=cip&sumlevel=all
 *          &sumlevel=2
 *          &sumlevel=4
 *          &sumlevel=6
 *
 * ?show=geo&sumlevel=nation
 *
 * ?show=naics&sumlevel=all
 *
 *  ?show=*
 *         &year=latest
 *         &required=COLUMN_NAME1,COLUMN_NAME2,...,COLUMN_NAMEX
 *         &COLUMN_NAME=COLUMN_NUMBER
 *           -filter the results - show data from a single column
 *         &where=COLUMN_NAME:(operator)VALUE
 *           -operators:
 *              greater than: >
 *              less than: <
 *              string starts with: ^
 *              string ends with: $ (placed after text)
 *              not equal (integer): !
 *              not equal (str): str!
 */
