const config = require('../config')
const store = require('./../store')

const getCourses = function (data) {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/courses`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const createCourse = function (data) {
  return $.ajax({
    method: 'POST',
    url: `${config.apiUrl}/courses`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

const updateCourse = function (id, data) {
  return $.ajax({
    method: 'PATCH',
    url: `${config.apiUrl}/courses/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: data
  })
}

const deleteCourse = function (id) {
  return $.ajax({
    method: 'DELETE',
    url: `${config.apiUrl}/courses/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const showCourse = function (id) {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/courses/${id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
  showCourse
}
