const { Router } = require('express');
var express = require('express');
var router = express.Router();
var Doners = require('../models/users');
var Project = require('../models/projects');


router.get('/add/:_id', function(req,res){
    var user = res.body
    Project.findOne({_id: req.params._id}, function(err, project,user){
        res.render('addfund',{title:'Funding', project: project});
    })
})

router.post('/save', function(req, res){
    const funding = new Project(req.body);
    let promise = funding.save();
    promise.then(()=>{
        console.log("fund  added");
       // console.log(funding)
        res.redirect('/');
    })
});

module.exports = router;