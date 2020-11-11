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

        // create a joke stuff \\
  $('#createJokes').on('submit', jokeEvents.onJokeCreate)
  $('#createJokes').hide()
  $('#createAJoke').on('click', () => {
    $('#createJokes').show()
  })
  $('#closeCreate').on('click', () => {
    $('#createJokes').hide()
    $('#createJokesMessage').text('')
  })
        // update a joke stuff \\
  $('#updateJokes').on('submit', jokeEvents.onJokeUpdate)
  $('#updateJokes').hide()
  $('#updateAJoke').on('click', () => {
    $('#updateJokes').show()
  })
  $('#closeUpdate').on('click', () => {
    $('#updateJokes').hide()
    $('#updateJokesMessage').text('')
  })
        // delete a joke stuff \\
  $('#deleteJokes').on('submit', jokeEvents.onJokedelete)
  $('#deleteJokes').hide()
  $('#deleteAJoke').on('click', () => {
    $('#deleteJokes').show()
  })
  $('#closeDelete').on('click', () => {
    $('#deleteJokes').hide()
    $('#deleteJokesMessage').text('')
  })
        // show a joke stuff \\
  $('#showJokes').on('submit', jokeEvents.onJokeshow)
  $('#showJokes').hide()
  $('#showAJoke').on('click', () => {
    $('#showJokes').show()
  })
  $('#closeShow').on('click', () => {
    $('#showJokes').hide()
    $('#showJokesMessage').text('')
  })
})
