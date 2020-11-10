'use strict'

const store = require('../store')

const signUpSuccess = (response) => {
  $('#sign-up').trigger('reset')
  $('#signUpMessage').text('You have successfully signed up ' + response.user.email + '\n You may now close this box and sign in')
}

const signUpFailure = () => {
  $('#signUpMessage').text('Sign up failed, try again')
}

const signInSuccess = (response) => {
  store.user = response.user
  $('#sign-in').trigger('reset')
  $('#signInMessage').text('Welcome ' + response.user.email)
  $('#signUp').hide()
  $('#signIn').hide()
  $('.changePassword').show()
  $('.signOut').show()
  $('h1').hide()
  $('#joke-title').show()
  $('.jokes').show()
}

const signInFailure = () => {
  $('#signInMessage').text('You have failed to sign in')
}

const passwordChangeSuccess = (response)  => {
  $('#change-password').trigger('reset')
  $('#changePasswordMessage').text('Your password has been successfully changed ' + store.user.email)
}

const passwordChangeFailure = () => {
  $('#changePasswordMessage').text('You have failed to change your password')
}

const signOutSuccess = (response) => {
  $('#sign-out').trigger('reset')
  $('#signOutMessage').text('You have been successfully signed out ' + store.user.email + ' You may now close this box')
  $('#signUp').show()
  $('#signIn').show()
  $('#changePassword').hide()
  $('#signOut').hide()
  $('#site-title').show()
  $('#yesSignOut').hide()
  $('#joke-title').hide()
  $('.jokes').hide()
  store.user = null
}

const signOutFailure = (error) => {
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