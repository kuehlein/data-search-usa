import React from 'react'
import { connect } from 'react-redux'

import './App.css'
import { Panel, Map } from '../index'


const App = () => (
  <div className="App">
    <Panel />
    <Map />
  </div>
)

const mapStateToProps = state => ({
  table: state.table
})


export default connect(mapStateToProps)(App)
