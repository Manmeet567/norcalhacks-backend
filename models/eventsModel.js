const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    endTime:{
        type:Date,
        required:true
    },
    author:{
        type:String,
        required:true
    }
}, {timestamps:true})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event