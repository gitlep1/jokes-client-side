'use strict'

const jokeCreateSuccess = (response) => {
  $('#createJokes').trigger('reset')
  $('#createJokesMessage').text('You have successfully created a joke')
  $('#create').show()
  $('#close').show()
}

const jokeCreateFailure = () => {
  $('#createJokesMessage').text('You have failed to create a joke')
}

// const jokeUpdateSuccess = (response) => {

// }

// const jokeUpdateFailure = () => {

// }

// const jokeDeleteSuccess = (response) => {

// }

// const jokeDeleteFailure = () => {

// }

module.exports = {
  jokeCreateSuccess,
  jokeCreateFailure
  // jokeUpdateSuccess,
  // jokeUpdateFailure,
  // jokeDeleteSuccess,
  // jokeDeleteFailure
}