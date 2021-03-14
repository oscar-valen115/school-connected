const signInSuccess = function () {
  $('#under-nav-message').addClass('alert-success show').html('You have successfully logged in')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-success show').html('')
  }, 3000)
}

const signInFailure = function () {
  $('#sign-in-message').addClass('alert-danger show').html('You have failed to sign in, Please try again!')
  setTimeout(function () {
    $('#sign-in-message').removeClass('alert-danger show').html('')
  }, 3000)
}

const signUpSuccess = function () {
  $('#under-nav-message').addClass('alert-success show').html('You have successfully signed up!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-success show').html('')
  }, 3000)
}

const signUpFailure = function () {
  $('#sign-up-message').addClass('alert-danger show').html('You have failed to sign up, please try again!')
  setTimeout(function () {
    $('#sign-in-message').removeClass('alert-danger show').html('')
  }, 3000)
}

const changePwFailure = function () {
  $('#change-pw-message').addClass('alert-danger show').html('Failed to change your password, please try again!')
  setTimeout(function () {
    $('#change-pw-message').removeClass('alert-danger show').html('')
  }, 3000)
}
const changePwSuccess = function () {
  $('#under-nav-message').addClass('alert-success show').html('You have successfully changed your password!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-success show').html('')
  }, 3000)
}

const signOutSuccess = function () {
  $('#sign-in-message').addClass('alert-success show').html('You have successfully logged out!')
  setTimeout(function () {
    $('#sign-in-message').removeClass('alert success show').html('')
  }, 3000)
}

const signOutFailure = function () {
  $('#under-nav-message').addClass('alert-danger show').html('You have failed to sign out, please try again!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-danger show').html('')
  }, 3000)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePwFailure,
  changePwSuccess,
  signOutFailure,
  signOutSuccess
}
