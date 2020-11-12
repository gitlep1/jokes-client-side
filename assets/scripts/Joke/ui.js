'use strict'

const store = require("../../../../../project1/tic-tac-toe-client/assets/scripts/store")

const jokeCreateSuccess = (response) => {
  $('#createJokes').trigger('reset')
  $('#createJokesMessage').text('You have successfully created a joke')
}

const jokeCreateFailure = () => {
  $('#createJokesMessage').text('You have failed to create a joke')
}

const jokeUpdateSuccess = (response) => {
  $('#updateJokes').trigger('reset')
  $('#updateJokesMessage').text('You have successfully updated this joke')
}

const jokeUpdateFailure = () => {
  $('#updateJokesMessage').text('You have failed to update this joke')
}

const jokeDeleteSuccess = (response) => {
  $('#deleteJokes').trigger('reset')
  $('#updateJokesMessage').text('You have deleted this joke')
}

const jokeDeleteFailure = () => {
  $('#deleteJokesMessage').text('You have failed to delete this joke')
}

const jokeShowSuccess = (response) => {
  $('#showJokes').trigger('reset')
  $('#showJokesMessage').text('Here is the joke: ')
}

const jokeShowFailure = () => {
  $('#showJokesMessage').text('You have failed to show this joke')
}

module.exports = {
  jokeCreateSuccess,
  jokeCreateFailure,
  jokeUpdateSuccess,
  jokeUpdateFailure,
  jokeDeleteSuccess,
  jokeDeleteFailure,
  jokeShowSuccess,
  jokeShowFailure
}