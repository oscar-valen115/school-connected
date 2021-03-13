
const createCourseSuccess = function () {
  $('#under-nav-message').addClass('alert-success show').html('Created the course successfully!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-success show').html('')
  }, 3000)
}
const createCourseFailure = function () {
  $('#under-nav-message').addClass('alert-danger show').html('Failed to create the course, please try again!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-danger show').html('')
  }, 3000)
}
const deleteCourseSuccess = function () {
  $('#under-nav-message').addClass('alert-success show').html('Deleted course successfully!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-success show').html('')
  }, 3000)
}
const deleteCourseFailure = function () {
  $('#under-nav-message').addClass('alert-danger show').html('Failed to delete course, please try again!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-danger show').html('')
  }, 3000)
}

const updateCourseSuccess = function () {
  $('#under-nav-message').addClass('alert-success show').html('Successfully updated course!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-success show').html('')
  }, 3000)
}
const updateCourseFailure = function () {
  $('#under-nav-message').addClass('alert-danger show').html('Failed to delete the course, please try again!')
  setTimeout(function () {
    $('#under-nav-message').removeClass('alert-danger show').html('')
  }, 3000)
}

module.exports = {
  createCourseSuccess,
  createCourseFailure,
  deleteCourseSuccess,
  deleteCourseFailure,
  updateCourseSuccess,
  updateCourseFailure
}
