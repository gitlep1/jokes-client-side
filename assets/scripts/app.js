'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./User/events')
require('./User/api')
require('./User/ui')
const jokeEvents = require('./Joke/events')
require('./Joke/api')
require('./Joke/ui')
const store = require('./store')

const puns = require('./JokesToTell/Puns')
const walkIns = require('./JokesToTell/walkIns')
const acrossRoads = require('./JokesToTell/AcrossRoads')
const knockKnocks = require('./JokesToTell/KnockKnocks')

$(() => {
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onPasswordChange)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#changePassword').hide()
  $('#signOut').hide()
  $('#joke-title').hide()
  $('.jokes').hide()
  $('.jokesCustomize').hide()
  $('#emptyH1').hide()
  $('.viewJokes').hide()

    //The little x in the top right of all modals
  $('#xClose').on('click', () => {
    $('#createJokes').hide()
    $('#updateJokes').hide()
    $('#deleteJokes').hide()
    $('#showJokes').hide()
    $('#createJokesMessage').text('')
    $('#updateJokesMessage').text('')
    $('#deleteJokesMessage').text('')
    $('#showJokesMessage').text('')
    $('#createJokes').trigger('reset')
  })

        // create a joke stuff \\
    $('#createJokes').on('submit', jokeEvents.onJokeCreate)
    $('#createJokes').hide()
    $('#createAJoke').on('click', () => {
    $('#createJokes').show()
    $('#updateJokes').hide()
    $('#deleteJokes').hide()
    $('#showJokes').hide()
    $('#createJokesMessage').text('')
    $('#updateJokesMessage').text('')
    $('#deleteJokesMessage').text('')
    $('#showJokesMessage').text('')
  })
  $('#closeCreate').on('click', () => {
    $('#createJokes').hide()
    $('#createJokesMessage').text('')
    $('#createJokes').trigger('reset')
  })
        // update a joke stuff \\
  $('#updateJokes').on('submit', jokeEvents.onJokeUpdate)
  $('#updateJokes').hide()
  $('#updateAJoke').on('click', () => {
    $('#createJokes').hide()
    $('#updateJokes').show()
    $('#deleteJokes').hide()
    $('#showJokes').hide()
    $('#createJokesMessage').text('')
    $('#updateJokesMessage').text('')
    $('#deleteJokesMessage').text('')
    $('#showJokesMessage').text('')
  })
  $('#closeUpdate').on('click', () => {
    $('#updateJokes').hide()
    $('#updateJokesMessage').text('')
    $('#updateJokes').trigger('reset')
  })
        // delete a joke stuff \\
  $('#deleteJokes').on('submit', jokeEvents.onJokeDelete)
  $('#deleteJokes').hide()
  $('#deleteAJoke').on('click', () => {
    $('#createJokes').hide()
    $('#updateJokes').hide()
    $('#deleteJokes').show()
    $('#showJokes').hide()
    $('#createJokesMessage').text('')
    $('#updateJokesMessage').text('')
    $('#deleteJokesMessage').text('')
    $('#showJokesMessage').text('')
  })
  $('#closeDelete').on('click', () => {
    $('#deleteJokes').hide()
    $('#deleteJokesMessage').text('')
    $('#deleteJokes').trigger('reset')
  })
        // show a joke stuff \\
  $('#showJokes').on('submit', jokeEvents.onJokeShow)
  $('#showJokes').hide()
  $('#showAJoke').on('click', () => {
    $('#createJokes').hide()
    $('#updateJokes').hide()
    $('#deleteJokes').hide()
    $('#showJokes').show()
    $('#createJokesMessage').text('')
    $('#updateJokesMessage').text('')
    $('#deleteJokesMessage').text('')
    $('#showJokesMessage').text('')
  })
  $('#closeShow').on('click', () => {
    $('#showJokes').hide()
    $('#showJokesMessage').text('')
    $('#showJokes').trigger('reset')
  })
})
