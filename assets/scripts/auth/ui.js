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

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up!')
  $('form').trigger('reset')
  display.homePage()
}

const signUpFailure = function (response) {
  authMessages.signInFailure()
}

const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  display.homePage()
  authMessages.changePwSuccess()
}
const changePasswordFailure = function (response) {
  authMessages.changePwFailure()
}

const signOutSuccess = function (response) {
  display.signInPage()
}

const signOutFailure = function (response) {
  console.log('Failed to sign out, try again')
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
