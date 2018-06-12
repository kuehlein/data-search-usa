import React, { Component } from 'react'
import axios from 'axios'
import logo from '../../assets/logo.svg'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      response: ''
    }
  }

  componentDidMount () {
    axios.get('/api/employment/hi')
      .then(res => this.setState({ response: res.data.testing }))
      .catch(err => console.log(err))
  }

  render() {
    const { response } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          { response }
        </p>
      </div>
    )
  }

}
