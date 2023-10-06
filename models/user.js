const mongoose = require('mongoose');
const { Bool } = require('mongoose/lib/schema/index');
const { boolean } = require('webidl-conversions');

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    emailNotification: {
        type: Boolean,
        required: true
    },
    smsNotification: {
        type: Boolean,
        required: true
    },
    userImage: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        require: true
    },
    registrationDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema);