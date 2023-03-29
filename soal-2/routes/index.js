const express = require('express')
const courseRoute = require('./courseRoutes')
const studentRoute = require('./studentRoutes')

const router = express.Router()

router.use('/students', studentRoute)
router.use('/courses', courseRoute)

module.exports = router