import React from 'react'
import { connect } from 'react-redux'
import logo from '../../assets/logo.svg'
import './Panel.css'

import ButtonDisplay from './ButtonDisplay'


const Panel = () => (
  <header className="App-header">
    <img src={ logo } className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
    <ButtonDisplay />
  </header>
)


export default connect(null)(Panel)
