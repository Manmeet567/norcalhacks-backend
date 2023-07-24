const express = require("express")
const { createEvent, getEvents } = require('../controllers/createControllers');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// auth middleware
router.use(requireAuth)

//createEvent route
router.post('/createEvent', createEvent)

//get events route
router.get('/getEvents', getEvents)

module.exports = router