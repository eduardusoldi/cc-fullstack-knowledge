const express = require('express')
const ControllerCourse = require('../controllers/controllerCourse')
const courseRoute = express.Router()

courseRoute.post('/', ControllerCourse.createCourse)
courseRoute.get('/', ControllerCourse.fetchCourse)
courseRoute.get('/:courseId', ControllerCourse.fetchCourseById)
courseRoute.delete('/:courseId', ControllerCourse.deleteCourse)
courseRoute.put('/:courseId', ControllerCourse.editCourse)

module.exports = courseRoute

