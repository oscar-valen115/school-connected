'use strict'

const authEvents = require('./auth/events')
const courseEvents = require('./course/events')
const display = require('./display/display')

$(() => {
  // Authentication Events
  display.signInPage()
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  // From sign-in-card, click sign-up-button to sign up for existing users
  $('#sign-up-button').on('click', display.signUpPage)
  $('#sign-in-button').on('click', display.signInPage)

  // nav events
  $('#nav-change-password').on('click', display.changePwPage)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#nav-sign-out').on('click', authEvents.onSignOut)

  // Course events
  $('#create-course-modal').on('submit', courseEvents.onCreateCourse)
  $('#nav-view-courses').on('click', courseEvents.onGetCourses)
  $('#update-course-modal').on('submit', courseEvents.onUpdateCourse)
  $('#course-posts-frame').on('click', '.course-delete', courseEvents.onDeleteCourse)
})
