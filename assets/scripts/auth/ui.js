const store = require('./../store')
const authMessages = require('./authMessages')
const display = require('../display/display')

const signInSuccess = function (response) {
  store.user = response.user
  $('form').trigger('reset')
  display.homePage()
  authMessages.signInSuccess()
}

const signInFailure = function () {
  authMessages.signInFailure()
}

/**
 * * Will go back to this later.
const signUpSuccess = function () {
  $('form').trigger('reset')
  $('#sign-up-card').hide()
  display.homePage()
  authMessages.signUpSuccess()
}
*/

const signUpSuccess = function () {
  $('form').trigger('reset')
  display.signInPage()
  authMessages.signUpSuccess()
}

const signUpFailure = function () {
  authMessages.signUpFailure()
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#change-password-card').hide()
  display.homePage()
  authMessages.changePwSuccess()
}
const changePasswordFailure = function () {
  authMessages.changePwFailure()
}

const signOutSuccess = function () {
  store.user = ''
  store.courses = ''
  display.signInPage()
  authMessages.signOutSuccess()
}

const signOutFailure = function () {
  authMessages.signOutFailure()
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
