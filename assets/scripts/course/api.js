const config = require('../config')
const store = require('./../store')

const getCourseInfo = function (data) {
  return $.ajax({
    method: 'GET',
    url: `${config.apiUrl}/courses`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  getCourseInfo
}
