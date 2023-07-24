const Event = require('../models/eventsModel')

// createEvent
const createEvent = async (req,res) => {
    const obj = req.body;
    try{
        const event = await Event.create({title:obj.title, desc:obj.desc, location:obj.location, startTime:obj.startTime, endTime:obj.endTime, author:obj.author})

        res.status(200).json({event})
    }
    catch(err){
        console.log(err)
        res.status(401).json({error:err})
    }
}

const getEvents = async (req, res) => {
    try {
      const events = await Event.find().sort({ createdAt: -1 }); // Sort in descending order of createdAt
      res.status(200).json(events);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Server Error' });
    }
  };

const recentEvents = async (req,res) => {
    try {
        const recentEvents = await Event.find().sort({ createdAt: -1 }).limit(3);
        res.status(200).json(recentEvents);
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Server Error'});
    }
}
  
const deleteEvent = async (req, res) => {
    const { _id } = req.params;
  
    try {
      // Assuming you have an Event model
      const deletedEvent = await Event.findByIdAndDelete(_id);
  
      if (!deletedEvent) {
        // Document not found with the given _id
        return res.status(404).json({ error: 'Event not found' });
      }
  
      // Document deleted successfully
      res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server Error' });
    }
  };

const locationEvent = async (req,res) => {
    try {
        const selectedCountry = req.query.country;
        const documents = await Event.find({ location: selectedCountry });
        if (documents.length > 0) {
            res.status(200).json(documents);
          } else {
            res.status(404).json({ error: `No Events for ${selectedCountry}` });
          }
      } catch (error) {
        console.error('Error fetching documents:', error);
        res.status(500).json({ error: 'Server Error' });
      }
}


module.exports = {
    createEvent,
    getEvents,
    recentEvents,
    deleteEvent,
    locationEvent
}
