'use strict'


// make request to figure it out
// then format the buttons accordingly

const CIP = {
  type: 'Courses',
  buttons: [
    { year },
    { sumLevel: CIP },
    { columns: 'click to make request' }, //?show=cip&required=headers
    { condition: '' },
    { limit: '' },
    // { order: '' },
    { sort: 'desc or asc' }
  ]
}
// make request:
  //?show=cip&require=headers
  //map over headers

const year = {
  type: 'Year',
  buttons: [
    { latest: 'latest' }, // &year=latest
    { yearNum: '2016' } // make request for years available
  ]
}

// ...


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

export default CIP
