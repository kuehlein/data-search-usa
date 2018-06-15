'use strict'

// utility function for error handling
const err = (status, message) => {
  const error = new Error(message)
  error.status = status
  return error
}


module.exports = {
  err
}
