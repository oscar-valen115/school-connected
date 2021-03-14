'use strict'
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateCourse = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.createCourse(data)
    .then(ui.createCourseSuccess)
    .catch(ui.createCourseFailure)
}

const onGetCourses = function (event) {
  event.preventDefault()
  api.getCourses()
    .then(ui.getCoursesSuccess)
    .catch(ui.getCoursesFailure)
}
const onUpdateCourse = function (event) {
  event.preventDefault()
  const form = event.target
  const courseData = getFormFields(form)
  const id = $(form).data('id')
  api.updateCourse(id, courseData)
    .then(ui.updateCourseSuccess)
    .catch(ui.updateCourseFailure)
}

const onDeleteCourse = function (event) {
  event.preventDefault()
  console.log('event data: ', event)
  console.log('Event Data Attribute info: ', event.data.id)
  const id = event.target.dataset.id
  api.deleteCourse(id)
    .then(ui.DeleteCourseSuccess)
    .catch(ui.DeleteCourseFailure)
}
/*
const onShowCourse = function (event) {
  event.preventDefault()
  const course = event.target
  const courseData = getFormFields(course)
}
*/

module.exports = {
  onCreateCourse,
  onGetCourses,
  onUpdateCourse,
  onDeleteCourse
}
