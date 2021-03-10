'use strict'

const authEvents = require('./auth/events')
const courseEvents = require('./course/events')

$(() => {
  // Authentication Events
  $('#nav-resources, #nav-courses, #nav-profile, #nav-create-course, #nav-change-password, #nav-create-daily-post').hide()
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-up-card').hide()
  $('#change-password-card').hide()
  // $('#sign-in-card').hide()
  $('#logged-in-user').hide()
  $('#course-posts-frame').hide()
  $('#create-daily-assignment-posts').hide()

  // From sign-in-card, click sign-up-button to sign up for existing users
  $('#sign-up-button').on('click', function (event) {
    event.preventDefault()
    $('#sign-in-card').hide()
    $('#sign-up-card').show()
  })
  $('#sign-in-button').on('click', function (event) {
    event.preventDefault()
    $('#sign-up-card').hide()
    $('#sign-in-card').show()
  })
  $('#daily-assignment-posts').hide()
  // nav events
  $('#nav-change-password').on('click', function (event) {
    event.preventDefault()
    $('logged-in-user').hide()
    $('#course-posts-frame').hide()
    $('#overdue-sidebar').hide()
    $('#upcoming-sidebar').hide()
    $('#change-password-card').show()
  })

  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#nav-sign-out').on('click', authEvents.onSignOut)
  $('#create-course-modal').on('submit', courseEvents.onCreateCourse)
  $('#nav-view-courses').on('click', courseEvents.onGetCourses)

  $('#update-course-modal').on('submit', courseEvents.onUpdateCourse)
  $('#update-course-modal').on('submit', function (event) {
    console.log('clicked event', event)
  })
  $('#course-posts-frame').on('click', '.course-delete', courseEvents.onDeleteCourse)
})
