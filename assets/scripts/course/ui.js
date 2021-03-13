const store = require('./../store')
const display = require('../display/display')
const courseMessage = require('./courseMessages')
// const moment = require('moment')

const getCoursesSuccess = function (event) {
  store.courses = event.courses
  let courseCreation = ''
  store.courses.forEach(course => {
    courseCreation += `
    <div class="card mb-4" id="updateCard" data-id=${course._id}>
    <div class="card-body">
      <button type="submit" data-toggle="modal" data-target="#updateModal" class="btn btn-secondary btn-sm update-course" data-id=${course._id}>Edit</button>
      <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger btn-sm course-delete" data-id=${course._id}> Delete</button>
      <h2 class="card-title">${course.title}</h2>
      <p class="card-text">${course.body}</p>
    </div>
    <div id="course-date-posted" class="card-footer text-muted">
      Date Posted: ${course.createdAt}
      <a id="course-post-owner" href="#">${store.user.email}</a>
    </div>
  </div>
   `
  })
  display.viewCoursesPage()
  $('#course-posts-frame').html(courseCreation)
}

const getCoursesFailure = function (event) {
  event.preventDefault()
  console.log('failed event!', event)
}

const createCourseSuccess = function (event) {
  $('form').trigger('reset')
  // $('#createCourseModal').modal('toggle')
  courseMessage.createCourseSuccess()
}
const createCourseFailure = function (event) {
  courseMessage.createCourseFailure()
}

const UpdateCourseSuccess = function (event) {
  event.preventDefault()
  $('#createCourseModal').modal('toggle')
  $('#createCourseModal').modal('hide')
  courseMessage.updateCourseSuccess()
}

const UpdateCourseFailure = function () {
  courseMessage.updateCourseFailure()
}

const DeleteCourseSuccess = function (event) {
  courseMessage.deleteCourseSuccess()
}

const DeleteCourseFailure = function () {
  courseMessage.deleteCourseFailure()
}

module.exports = {
  createCourseSuccess,
  createCourseFailure,
  getCoursesSuccess,
  getCoursesFailure,
  UpdateCourseSuccess,
  UpdateCourseFailure,
  DeleteCourseSuccess,
  DeleteCourseFailure
}
