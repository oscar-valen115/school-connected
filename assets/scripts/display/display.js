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

const updateCourseModal = function (event) {
  event.preventDefault()
  const data = event.target
  const id = $(data).data('id')
  const updateModal = `
  <div class="modal fade show" id="updateModal" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Update Course</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form class="update-course-modal" data-id=${id}>
                     <div class="form-group">
                       <label for="">Course Title</label>
                       <input type="" name="course[title]" class="form-control" id="" placeholder="Course Title">
                     </div>
                     <div class="form-group">
                       <label for="course-summary-sum">Course Summary</label>
                       <textarea class="form-control" name="course[body]" id="" rows="3"></textarea>
                     </div>
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                     <button type="submit" class="btn btn-primary">Update
                       Course</button>
                   </form>
                  </div>
                  <div class="modal-footer">

                  </div>
                </div>
              </div>
            </div>
  `
  $('#course-update-frame').html(updateModal)
}

module.exports = {
  signInPage,
  signUpPage,
  homePage,
  changePwPage,
  viewCoursesPage,
  updateCourseModal
}
