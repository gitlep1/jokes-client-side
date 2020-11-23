'use strict'

const store = require('../store')
const { passwordChange } = require('./api')

const signUpSuccess = (response) => {
  $('#sign-up-form').trigger('reset')
  $('#signUpMessage').text('You have successfully signed up ' + response.user.email + '\n You may now close this box and sign in')
  $('#signOutMessage').text('')
  $('#changePasswordMessage').text('')
  $('#signInMessage').text('')
}

const signUpFailure = () => {
  $('#signUpMessage').text('Sign up failed, try again')
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#sign-in-form').trigger('reset')
  $('#signInMessage').text('Welcome ' + response.user.email)
  $('#signOutMessage').text('')
  $('#signUpMessage').text('')
  $('#changePasswordMessage').text('')
  $('#signUp').hide()
  $('#signIn').hide()
  $('#changePassword').show()
  $('#signOut').show()
  $('h1').hide()
  $('#joke-title').show()
  $('.jokes').show()
  $('.jokesCustomize').show()
  $('#emptyH1').show()
  $('#SOformSubmit').show()
  $('.viewJokes').show()
}

const signInFailure = () => {
  $('#signInMessage').text('You have failed to sign in')
}

const passwordChangeSuccess = ()  => {
  $('#change-password-form').trigger('reset')
  $('#changePasswordMessage').text('Your password has been successfully changed ' + store.user.email)
  $('#CPformClose').on('click', () => {
    $('#change-password-form').trigger('reset')
    $('#changePasswordMessage').text('')
  })
  $('#signOutMessage').text('')
  $('#signUpMessage').text('')
  $('#signInMessage').text('')
}

const passwordChangeFailure = () => {
  $('#changePasswordMessage').text('You have failed to change your password')
  $('#change-password-form').trigger('reset')
  $('#changePasswordMessage').text('')
}

const signOutSuccess = () => {
  $('#sign-in-form').trigger('reset')
  $('#signOutMessage').text('You have been successfully signed out ' + store.user.email + ' You may now close this box')
  $('#signUp').show()
  $('#signIn').show()
  $('#changePassword').hide()
  $('#signOut').hide()
  $('#site-title').show()
  $('#joke-title').hide()
  $('.jokes').hide()
  $('.jokesCustomize').hide()
  $('#SOformSubmit').hide()
  $('#SOformSubmit').on('click', () => {
    $('#signOutMessage').text('')
    $('#signInMessage').text('')
    $('#sign-in').trigger('reset')
  })
  $('#SOformClose').on('click', () => {
    $('#signOutMessage').text('')
    $('#signInMessage').text('')
    $('#sign-in').trigger('reset')
  })
  $('#viewJokesId').text('')
  $('#viewJokesJoke').text('')
  $('#viewJokesPunchline').text('')
  $('.viewJokes').hide()
  store.user = null
}

const signOutFailure = () => {
  $('#signOutMessage').text('You have failed to signed out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  signOutSuccess,
  signOutFailure
}