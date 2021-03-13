const signInSuccess = function () {
  $('#under-nav-message').addClass('alert-success show').html('You have successfully logged in')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-success show').html('')
  }, 3000)
}

const signInFailure = function () {
  $('#sign-in-failure').addClass('show')
  setTimeout(function () {
    $('#sign-in-failure').removeClass('show')
  }, 3000)
}

const changePwFailure = function () {
  $('#error-message').text('Password change failed!')
  setTimeout(function () {
    $('#error-message').text('')
  }, 3000)
}
const changePwSuccess = function () {
  console.log('Success')
}

module.exports = {
  signInSuccess,
  signInFailure,
  changePwFailure,
  changePwSuccess
}
