var mongoose = require('mongoose');

const Projectscheme = mongoose.Schema({
    title: { 
        'type':String
    },

    short_description: { 
        'type':String
    },

    long_description: { 
        'type':String
    },

    fund_goal :{ 
        type: Number
    },

    fund_end_date: {
        type: Date
    },

    file: {
        type:String,
    },

    khalti_id :{
         type: Number
    },

    organisation_contact: {
         type: Number
     },
    organisation_address: {
        type: String,
    },
    created_date:{
         type:Date, default: Date.now()
    },

})

module.exports = mongoose.model('projects',Projectscheme);