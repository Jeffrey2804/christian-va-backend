const mongoose = require('mongoose');
const { Bool } = require('mongoose/lib/schema/index');
const { boolean } = require('webidl-conversions');

const messageList = new mongoose.Schema({
   
    recipientId: {
        type: String,
        required: true
    },
    messageId: {
        type: String,
        required: true
    },
    isRead: {
        type: String,
        required: true
    },
    
    dateUpdated: {
        type: Date,
        required: true,
        default: Date.now
    }
  
})

module.exports = mongoose.model("MessageList", messageList);