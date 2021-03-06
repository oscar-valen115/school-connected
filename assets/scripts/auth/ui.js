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

module.exports = {
  signInSuccess,
  signInFailure
  // signUpSuccess,
  // signUpFailure,
  // changePasswordSuccess,
  // changePasswordFailure,
  // signOutSuccess,
  // signOutFailure
}
