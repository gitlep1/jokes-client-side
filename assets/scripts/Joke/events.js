'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onJokeCreate = (event) => {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.jokeCreate(data)
    .then(ui.jokeCreateSuccess)
    .catch(ui.jokeCreateFailure)
}

// const onJokeUpdate = (event) => {
//   event.preventDefault()

//   const form = event.target
//   const data = getFormFields(form)

//   api.jokeUpdate(data)
//     .then(ui.jokeUpdateSuccess)
//     .catch(ui.jokeUpdateFailure)
// }

// const onJokeDelete = (event) => {
//   event.preventDefault()

//   const form = event.target
//   const data = getFormFields(form)

//   api.jokeDelete(data)
//     .then(ui.jokeDeleteSuccess)
//     .catch(ui.jokeDeleteFailure)
// }

module.exports = {
  onJokeCreate,
  // onJokeUpdate,
  // onJokeDelete
}