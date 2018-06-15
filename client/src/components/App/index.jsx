import React, { Component } from 'react'
import axios from 'axios'
import logo from '../../assets/logo.svg'
import './App.css'
import createTable from './utils'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      datausa: {}
    }
  }

  componentDidMount () {
    const uri = 'cip'

    axios.get(`/api/table/datausa/${uri}`)
      .then(res => this.setState({ datausa: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    const { datausa } = this.state
console.log(datausa)
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          { datausa.headers && createTable(datausa.headers, datausa.data) }
        </div>
      </div>
    )
  }

}

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
