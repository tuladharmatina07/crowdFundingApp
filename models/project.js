var mongoose = require('mongoose');

const Projectscheme = mongoose.Schema({
    title: String,
    description: String,
    fund_collected :{ type: Number},
    doner: {String},
    createdate:{ type:Date, default: Date.now()}
})

module.exports = mongoose.model('projects',Projectscheme);
