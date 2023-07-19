const Event = require('../models/eventsModel')

// createEvent
const createEvent = async (req,res) => {
    const obj = req.body;
    try{
        console.log(obj)
        res.status(200).json({"recieved":"true"})
    }
    catch(err){
        console.log(err)
        res.status(401).json({error:err})
    }
}

module.exports = {
    createEvent
}
