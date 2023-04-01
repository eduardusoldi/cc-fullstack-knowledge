const express = require('express')
const ControllerStudent = require('../controllers/controllerStudent')
const studentRoute = express.Router()

studentRoute.get('/', ControllerStudent.fetchStudent)
studentRoute.post('/', ControllerStudent.createStudent)
studentRoute.get('/list-course', ControllerStudent.fetchStudentCourse)
studentRoute.post('/list-course/:courseId', ControllerStudent.createStudentCourse)
studentRoute.get('/:studentId', ControllerStudent.fetchStudentById)
studentRoute.put('/:studentId', ControllerStudent.editStudent)
studentRoute.delete('/:studentId', ControllerStudent.deleteStudent)

module.exports = studentRoute

