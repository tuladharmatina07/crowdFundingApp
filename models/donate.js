var mongoose = require('mongoose');

const DonateSchema = mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    fund:{
        type:Number,
        require: true
    },
    
})

module.exports = mongoose.model('Donate', DonateSchema);