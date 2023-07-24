const Event = require('../models/eventsModel')

// createEvent
const createEvent = async (req,res) => {
    const obj = req.body;
    try{
        console.log(obj)

        const event = await Event.create({title:obj.title, desc:obj.desc, location:obj.location, startTime:obj.startTime, endTime:obj.endTime, author:obj.author})

        res.status(200).json({event})
    }
    catch(err){
        console.log(err)
        res.status(401).json({error:err})
    }
}

const getEvents = async (req,res) => {
    try{
        const events = await Event.find()
        res.status(200).json(events)
    }
    catch(err){
        console.log(err)
        res.status(401).json({error:err})
    }
}

module.exports = {
    createEvent,
    getEvents
}
