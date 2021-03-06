const store = require('./../store')

const signInSuccess = function (response) {
  store.user = response.user
  $('#sign-in-card').hide()
  $('#sign-in').trigger('reset')

  $('#logged-in-user').show()

  // $('#change-password-card').show()
}

const signInFailure = function () {
  $('#error-message').text('Sign in failed, please try again')
}

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up!')
  $('#sign-up').hide()
  $('#logged-in-user').show()
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, please try again')
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
