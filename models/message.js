const mongoose = require('mongoose');
const { Bool } = require('mongoose/lib/schema/index');
const { boolean } = require('webidl-conversions');

const messageSchema = new mongoose.Schema({
   
    subject: {
        type: String,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
    message_body: {
        type: String,
        required: true
    },
    isReminder: {
        type: String,
        required: true
    },
    
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
  
})

module.exports = mongoose.model("Message", messageSchema);