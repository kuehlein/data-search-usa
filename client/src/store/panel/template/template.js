'use strict'

import {
  CIP,
  UNIVERSITY,
  DEGREE,
  PUMS_DEGREE
} from './index'


// https://api.datausa.io/api/variables/

// 'http://api.datausa.io/attrs/list/'
// ^^^^^^^^^
// make request to find tables
// use those


// export const education = {
//   type: 'Education',
//   buttons: [
//     { name: 'cip' },
//     { name: 'university' },
//     { name: 'degree' },
//     { name: 'pums_degree' }
//   ]
// }

export const EDUCATION = {
  type: 'Education',
  buttons: [
    { name: CIP },
    { name: UNIVERSITY },
    { name: DEGREE },
    { name: PUMS_DEGREE }
  ]
}

export const employment = {
  type: 'Employment',
  buttons: [
    { name: 'naics' },
    { name: 'soc' },
    { name: 'sector' },
    // { name: 'iocode' },
    { name: 'bls_soc' },
    // { name: 'bls_naics' },
    // { name: 'acs_occ' },
    // { name: 'acs_ind' },
    { name: 'wage_bin' }
  ]
}

export const population = {
  type: 'Population',
  buttons: [
    { name: 'sex' },
    { name: 'skill' },
    { name: 'birthplace' },
    // { name: 'language' },
    // { name: 'acs_race' },
    { name: 'race' }
  ]
}

export const misc = {
  type: 'Misc',
  buttons: [
    { name: 'geo' },
    // { name: 'conflict' }
  ]
}









/*
 * Make a template of the different options
 * available with different selections on
 * the control panel
 *
 *
 *
 *
 */






/*
?show=cip
    CIP codes are available at four basic sumlevels: 2-digit (high level), 4 digit, 6-digit (most detailed) and all (2, 4 and 6)

?show=cip <--- Classification of Instructional Programs
?show=geo <--- geographies
?show=naics <--- ?

&sumlevel=nation
&sumlevel=all
&sumlevel=state

&year=latest

&required=COLUMN_NAME1,COLUMN_NAME2,...,COLUMN_NAMEX

&COLUMN_NAME=COLUMN_NUMBER
    You could filter the results to only show data from a single column

&where=COLUMN_NAME:(operator)VALUE
    operators:
        greater than: >
        less than: <
        string starts with: ^
        string ends with: $ (placed after text)
        not equal (integer): !
        not equal (str): str!
*/


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

