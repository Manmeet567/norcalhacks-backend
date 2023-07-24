const express = require("express")
const { createEvent, getEvents, recentEvents, deleteEvent, locationEvent } = require('../controllers/createControllers');
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// auth middleware
router.use(requireAuth)

//createEvent route
router.post('/createEvent', createEvent)

//get events route
router.get('/getEvents', getEvents)

// get recent 3 events
router.get('/recentEvents', recentEvents)

//delete a document
router.delete('/deleteEvent/:_id', deleteEvent)

//get docs from specific location
router.get('/location', locationEvent)

module.exports = router