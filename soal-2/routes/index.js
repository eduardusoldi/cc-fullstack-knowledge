const express = require('express')
const { authentication } = require('../middleware/auth')
const authRoute = require('./authRoutes')
const courseRoute = require('./courseRoutes')
const studentRoute = require('./studentRoutes')

const router = express.Router()

router.use(authRoute)
router.use(authentication)
router.use('/students', studentRoute)
router.use('/courses', courseRoute)

module.exports = router