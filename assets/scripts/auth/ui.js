const store = require('./../store')
// const courseApi = require('../course/api')

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-card').hide()
  $('#nav-courses, #nav-profile, #nav-create-course, #nav-change-password').show()
  $('#logged-in-user').show()
  console.log('store data: ', store)

  // $('#change-password-card').show()
}

const signInFailure = function () {
  $('#error-message').text('Sign in failed, please try again')
}

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up!')
  $('#sign-up-card').hide()
  $('#logged-in-user').show()
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, please try again')
}

const changePasswordSuccess = function (response) {
  $('#change-password-card').hide()
  $('#change-password').trigger('reset')
  $('#logged-in-user').show()
}
const changePasswordFailure = function (response) {
  $('#error-message').text('Password change failed!')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure
  // signOutSuccess,
  // signOutFailure
}
