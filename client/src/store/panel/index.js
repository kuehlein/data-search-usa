

/*
 * this whole folder is an outdated approach
 * but it still may be useful in regards to formatting
 * the way the buttons will be mapped out
 * save until an exact approach is determined.
 */















// import axios from 'axios'
// import { read, add, edit, register } from './modes'


// /**
//  * ACTION TYPES
//  */
// const SET_MODE_READ = 'SET_MODE_READ'
// const SET_MODE_ADD = 'SET_MODE_ADD'
// const SET_MODE_EDIT = 'SET_MODE_EDIT'
// const SET_MODE_REGISTER = 'SET_MODE_REGISTER'
// const GET_MODE = 'GET_MODE'

// /**
//  * ACTION CREATORS
//  */
// export const setModeRead = () => ({ type: SET_MODE_READ })
// export const setModeAdd = () => ({ type: SET_MODE_ADD })
// export const setModeEdit = () => ({ type: SET_MODE_EDIT })
// export const setModeRegister = () => ({ type: SET_MODE_REGISTER })
// export const getMode = () => ({ type: GET_MODE })

// /**
//  * REDUCER
//  */
// export default (state = read, action) => {
//   switch (action.type) {

//     case SET_MODE_READ:
//       return read

//     case SET_MODE_ADD:
//       return add

//     case SET_MODE_EDIT:
//       return edit

//     case SET_MODE_REGISTER:
//       return register

//     case GET_MODE:
//     default:
//       return state
//   }

// }




/*
 * CATAGORIES:
 *   -education
 *       ~cip
 *       ~university
 *       ~degree
 *       ~pums_degree
 *   -employment
 *       ~naics
 *       ~soc
 *       ~sector
 *       ~iocode          ERROR
 *       ~bls_soc
 *       ~bls_naics       ERROR
 *       ~acs_occ         ERROR
 *       ~acs_ind         ERROR
 *       ~wage_bin
 *    -population
 *       ~sex
 *       ~skill
 *       ~birthplace
 *       ~language        ERROR
 *       ~acs_race        ERROR
 *       ~race
 *    -misc.
 *       ~geo
 *       ~conflict         ERROR
 */




// import all templates here to export

// export { default as temp } from './temp.js'


const PANEL_STATE = {
  cip: false, // <----------------------
  geo: false, // <----------------------
  naics: false, // <----------------------
  soc: false, // <----------------------
  sex: false, // <----------------------
  skill: false, // <----------------------
  birthplace: false, // <----------------------
  // language: false, // <----------------------
  university: false, // <----------------------
  sector: false, // <----------------------
  // iocode: false, // <----------------------
  bls_soc: false, // <----------------------
  // bls_naics: false, // <----------------------
  // acs_occ: false, // <----------------------
  // acs_ind: false, // <----------------------
  // acs_race: false, // <----------------------
  race: false, // <----------------------
  degree: false, // <----------------------
  pums_degree: false, // <----------------------
  wage_bin: false, // <----------------------
  // conflict: false // <----------------------
}



export default PANEL_STATE
