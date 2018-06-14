import React, { Component } from 'react'
import axios from 'axios'
import logo from '../../assets/logo.svg'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      response: [],
      datausa: []
    }
  }

  componentDidMount () {
    axios.get('/api/employment/usgov')
      .then(res => {
        const addresses = Array.isArray(res.data)
          ? res.data.map(meta => ({
              street: meta.MAIL_STREET,
              city: meta.MAIL_CITY,
              state: meta.MAIL_STATE,
              zip: meta.MAIL_ZIP
            }))
          : res.data
        this.setState({ response: addresses })
      })
      .catch(err => console.log(err))

      axios.get('/api/employment/datausa')
      .then(res => {
        const addresses = Array.isArray(res.data)
          // ? res.data.map(meta => ({
              // street: meta.MAIL_STREET,
              // city: meta.MAIL_CITY,
              // state: meta.MAIL_STATE,
              // zip: meta.MAIL_ZIP
            // }))
            ? res.data
          : res.data
        this.setState({ datausa: addresses })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { response, datausa } = this.state
    const loopOverKeys = (res) => {
      const all = []
      for (let key in res) {
        all.push([key, res[key]])
      }
      return all
    }
console.log(datausa) // <------------------------------
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {
            Array.isArray(datausa)
            ? datausa.map((res, i) => (
                <p key={ i }>{ `${res.street} ${res.city}, ${res.state}, ${res.zip}` }</p>
              ))
            :
              loopOverKeys(datausa).map((field, i) => (
                <p key={ i }>{ `${field[0]}: ${field[1]}` }</p>
              ))
          }
        </div>
        {/* <div className="App-intro">
          {
            Array.isArray(response)
              ? response.map((res, i) => (
                  <p key={ i }>{ `${res.street} ${res.city}, ${res.state}, ${res.zip}` }</p>
                ))
              :
                loopOverKeys(response).map((field, i) => (
                  <p key={ i }>{ `${field[0]}: ${field[1]}` }</p>
                ))
          }
        </div> */}
      </div>
    )
  }

}
