import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setTable } from '../../store'
import logo from '../../assets/logo.svg'
import './Panel.css'


class Panel extends Component {
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
          <button onClick={ () => this.handleClick('cip') }>Courses</button>
          <button onClick={ () => this.handleClick('geo') }>Locations</button>
          <button onClick={ () => this.handleClick('naics') }>Industries</button>
          <br />
          <button onClick={ () => this.handleClick('soc') }>Occupations</button>
          <button onClick={ () => this.handleClick('sex') }>Genders</button>
          <button onClick={ () => this.handleClick('skill') }>Skills</button>
          <br />
          <button onClick={ () => this.handleClick('birthplace') }>Birthplaces</button>
          {/* <button onClick={ () => this.handleClick('language') }>Languages</button> * error: 500 */ }
          <button onClick={ () => this.handleClick('university') }>Universities</button>
          <br />
          <button onClick={ () => this.handleClick('sector') }>Sectors</button>
          { /* <button onClick={ () => this.handleClick('iocode') }>Input/Output Industries</button> * error? */ }
          <button onClick={ () => this.handleClick('bls_soc') }>BLS Occupations</button>
          <br />
          { /* <button onClick={ () => this.handleClick('bls_naics') }>BLS Industries</button> * error? */ }
          { /* <button onClick={ () => this.handleClick('acs_occ') }>ACS Occupations</button> * no response */ }
          { /* <button onClick={ () => this.handleClick('acs_ind') }>ACS Industries</button> * no response */ }
          <br />
          { /* <button onClick={ () => this.handleClick('acs_race') }>ACS Race & Ethnicities</button> * error? */ }
          <button onClick={ () => this.handleClick('race') }>Race & Ethnicities</button>
          <button onClick={ () => this.handleClick('degree') }>Degrees</button>
          <br />
          { /* <button onClick={ () => this.handleClick('pums_degree') }>PUMS Degrees</button> * error? */ }
          <button onClick={ () => this.handleClick('wage_bin') }>Wage Bins</button>
          { /* <button onClick={ () => this.handleClick('conflict') }>Conflicts</button> * error? */ }
        </div>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setTable: type => dispatch(setTable(type))
})


export default connect(null, mapDispatchToProps)(Panel)


// errors with buttons likely have to do with size or req
