const express = require('express')
const ControllerStudent = require('../controllers/controllerStudent')
const studentRoute = express.Router()

studentRoute.get('/', ControllerStudent.fetchStudent)
studentRoute.post('/', ControllerStudent.createStudent)
studentRoute.get('/:studentId', ControllerStudent.fetchStudentById)
studentRoute.put('/:studentId', ControllerStudent.editStudent)
studentRoute.delete('/:studentId', ControllerStudent.deleteStudent)

module.exports = studentRoute

