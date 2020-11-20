const { Router } = require('express');
var express = require('express');
var router = express.Router();
var Doners = require('../models/users');
var Project = require('../models/project');


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
        console.log(funding)
        res.redirect('/');
    })
})


/*
router.get('/remove/:_id', function(req,res){
    console.log(req.params._id);
    Doners.remove({ _id: req.params._id }, function() {
        res.redirect('/fund');
    })
})

router.get('/edit/:_id', function(req,res){
    // console.log(req.params._id);
    // const book = books.find((book)=>book._id === req.params._id);
    // res.render('editBooks',{
    //     title:"Edit Book",
    //     book
    // })
    var user = res.body
    Books.findOne({_id: req.params._id}, function(err, book,user){
        res.render('editBooks',{title:'Edit Books', book: book,user});
    })
})

router.post('/saveEdited/:_id', function(req,res){
    // let currIndex = books.findIndex(book => book._id === req.params._id);
    // books.splice(currIndex, 1, {...req.body, _id: req.params._id});
    // res.redirect('/');
    let promise = Books.findOneAndUpdate({_id: req.params._id}, {$set:{...req.body}})
    promise.then(()=>{
        console.log("Book Edited");
        res.redirect('/');
    })
    console.log(req.params._id);
})

*/


module.exports = router;