const store = require('./../store')
// const moment = require('moment')

const getCoursesSuccess = function (event) {
  store.courses = event.courses
  let courseCreation = ''
  store.courses.forEach(course => {
    courseCreation += `
    <div class="card mb-4" data-id=${course._id}>
    <div class="card-body">
      <button type="button" class="btn btn-secondary btn-sm update-course" data-id=${course._id}>Edit</button>
      <button type="button" class="btn btn-danger btn-sm course-delete" data-id=${course._id}> Delete</button>
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
  $('#course-posts-frame').show()
  $('#course-posts-frame').html(courseCreation)
}

const getCoursesFailure = function (event) {
  event.preventDefault()
  console.log('failed event!', event)
}

const createCourseSuccess = function (event) {
  event.preventDefault()
  console.log('success!!!', event)
  console.log('Event Target Data: ', event.target)
  $('form').trigger('reset')
}
const createCourseFailure = function (event) {
  event.preventDefault()
  console.log('Failed, try again!!!', event)
}

const onUpdateCourseSuccess = function (event) {
  event.preventDefault()
  console.log('Course updated!')
}

const onUpdateCourseFailure = function () {
  console.log('Course update failed, please try again!')
}

const onDeleteCourseSuccess = function (event) {
  event.preventDefault()
  console.log('course deleted successfully!')
}

const onDeleteCourseFailure = function (event) {
  event.preventDefault()
  console.log('event: ', event)
  console.log('event target data: ', event.target)
  console.log('event target data id: ', event.target.dataset.id)
  const id = event.target.dataset.id
  console.log('course deletion Failed!, please try again')
}

module.exports = {
  createCourseSuccess,
  createCourseFailure,
  getCoursesSuccess,
  getCoursesFailure,
  onUpdateCourseSuccess,
  onUpdateCourseFailure,
  onDeleteCourseSuccess,
  onDeleteCourseFailure
}