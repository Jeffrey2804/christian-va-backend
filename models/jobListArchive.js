const mongoose = require('mongoose');
const { Bool } = require('mongoose/lib/schema/index');
const { boolean } = require('webidl-conversions');

const jobListArchive = new mongoose.Schema({
   
    jobTitle: {
        type: String,
        required: true
    },
    employerId: {
        type: String,
        required: true
    },
    employerName: {
        type: String,
        required: true
    },
    hoursPerWeek: {
        type: String,
        required: true
    },
    jobOverView: {
        type: String,
        required: true
    },
    skillsRequiredId: {
        type: String,
        required: true
    },
    datePosted: {
        type: Date,
        required: true,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        require: false
    }
  
})

module.exports = mongoose.model("JobListArchive", jobListArchive);