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

    current_fund :{
         type: Number
    },

    // organisation_name: {
    //     type: String
    // },

    created_date:{
         type:Date, default: Date.now()
    },

})

module.exports = mongoose.model('projects',Projectscheme);