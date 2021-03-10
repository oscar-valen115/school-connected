const store = require('./../store')

const signInSuccess = function (response) {
  store.user = response.user
  // $('#' + id).trigger('reset')
  $('#sign-in-card').hide()
  $('#nav-courses, #nav-profile, #nav-create-course, #nav-change-password, #nav-create-daily-post').show()
  $('#logged-in-user').show()
  // $('#course-posts').show()
  // $('#create-daily-assignment-posts').hide()
  // $('#change-password-card').show()
  $('#daily-assignment-posts').show()
  $('form').trigger('reset') 
}

const signInFailure = function () {
  $('#error-message').text('Sign in failed, please try again')
}

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up!')
  $('form').trigger('reset')
  $('#sign-up-card').hide()
  $('#logged-in-user').show()
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, please try again')
}

const changePasswordSuccess = function (response) {
  $('#change-password-card').hide()
  $('form').trigger('reset')
  $('#logged-in-user').show()
}
const changePasswordFailure = function (response) {
  $('#error-message').text('Password change failed!')
}

const signOutSuccess = function (response) {
  $('#sign-in-card').show()
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
