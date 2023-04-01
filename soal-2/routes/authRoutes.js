const express = require('express')
const ControllerAuth = require('../controllers/controllerAuth')
const authRoute = express.Router()

authRoute.post('/register', ControllerAuth.postRegister)
authRoute.post('/login', ControllerAuth.postLogin)

module.exports = authRoute


