'use strict'

const authEvents = require('./auth/events')

$(() => {
  // Authentication Events

  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-card').hide()
  $('#change-password-card').hide()

  // $('#sign-in-card').hide()

  // Logged in events
  $('#logged-in-user').hide()
  // $('#logged-in-user').on('click', '#sign-out', authEvents.onSignOut)

  // From sign-in-card, click sign-up-button to sign up for existing users
  $('#sign-up-button').on('click', function (event) {
    event.preventDefault()
    $('#sign-in-card').hide()
    $('#sign-up-card').show()
  })

  // From sign-up-card, click sign-in-button to sign in for existing users
  // $('#sign-in-button').on('click', function (event) {
  //   event.preventDefault()
  //   $('#sign-up-card').hide()
  //   $('#sign-in-card').show()
  // })

  // Logged in user events
})
