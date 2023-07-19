const express = require("express")
const { createEvent } = require('../controllers/createControllers');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// auth middleware
router.use(requireAuth)

//createEvent route
router.post('/createEvent', createEvent)

//share post route
// router.post('/sharePost', sharePost)

module.exports = router