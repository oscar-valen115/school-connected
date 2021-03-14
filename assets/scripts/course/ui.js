const store = require('./../store')
const display = require('../display/display')
const courseMessage = require('./courseMessages')
// const moment = require('moment')

const getCoursesSuccess = function (event) {
  store.courses = event.courses
  console.log('store courses info: ', store.courses)
  let courseCreation = ''
  let courseModalData = ''
  store.courses.forEach(course => {
    courseCreation += `
    <div class="card mb-4" id="updateCard" data-id=${course._id}>
    <div class="card-body">
      <button type="button" data-toggle="modal" data-target="#updateModal" class="btn btn-secondary btn-sm update-course" data-id=${course._id}>Edit</button>
      <button type="button" data-toggle="modal" data-target="#exampleModal" class="btn btn-danger btn-sm course-delete" data-id=${course._id}> Delete</button>
      <h2 class="card-title">${course.title}</h2>
      <p class="card-text">${course.body}</p>
    </div>
    <div id="course-date-posted" class="card-footer text-muted">
      Date Posted: ${course.createdAt}
      <a id="course-post-owner" href="#">${course.owner.email}</a>
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

const updateCourseSuccess = function () {
  // $('body').removeClass('modal-open modal-backdrop')
  // $('#course-update-frame').hide()
  courseMessage.updateCourseSuccess()
}

const updateCourseFailure = function () {
  courseMessage.updateCourseFailure()
}

const deleteCourseSuccess = function (event) {
  courseMessage.deleteCourseSuccess()
}

const deleteCourseFailure = function () {
  courseMessage.deleteCourseFailure()
}

module.exports = {
  createCourseSuccess,
  createCourseFailure,
  getCoursesSuccess,
  getCoursesFailure,
  updateCourseSuccess,
  updateCourseFailure,
  deleteCourseSuccess,
  deleteCourseFailure
}
