// Auth pages
const signInPage = function () {
  $('#nav-resources, #nav-courses, #nav-profile, #nav-create-course, #nav-change-password, #nav-create-daily-post').hide()
  $('#sign-up-card').hide()
  $('#change-password-card').hide()
  $('#logged-in-user').hide()
  $('#course-posts-frame').hide()
  $('#create-daily-assignment-posts').hide()
  $('#daily-assignment-posts').hide()
  $('#sign-in-card').show()
}
const signUpPage = function () {
  $('#nav-resources, #nav-courses, #nav-profile, #nav-create-course, #nav-change-password, #nav-create-daily-post').hide()
  $('#change-password-card').hide()
  $('#logged-in-user').hide()
  $('#course-posts-frame').hide()
  $('#create-daily-assignment-posts').hide()
  $('#daily-assignment-posts').hide()
  $('#sign-in-card').hide()
  $('#sign-up-card').show()
}

const homePage = function () {
  $('#sign-in-card').hide()
  $('#nav-courses, #nav-profile, #nav-create-course, #nav-change-password, #nav-create-daily-post').show()
  $('#logged-in-user').show()
  $('#daily-assignment-posts').show()
}
const changePwPage = function () {
  $('#sign-up-card').hide()
  $('#logged-in-user').hide()
  $('#course-posts-frame').hide()
  $('#create-daily-assignment-posts').hide()
  $('#daily-assignment-posts').hide()
  $('#sign-in-card').hide()
  $('#change-password-card').show()
}

// Course pages

const viewCoursesPage = function () {
  $('#daily-assignment-posts').hide()
  $('#course-posts-frame').show()
}

module.exports = {
  signInPage,
  signUpPage,
  homePage,
  changePwPage,
  viewCoursesPage
}
