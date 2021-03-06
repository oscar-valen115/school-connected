'use strict'

const authEvents = require('./auth/events')

$(() => {
  // Authentication events

  $('#sign-in').on('submit', authEvents.onSignIn)
  // $('#sign-in-card').hide()
  $('#sign-up-card').hide()
  $('#change-password-card').hide()
  $('#logged-in-user').hide()

  // Logged in user events
})
