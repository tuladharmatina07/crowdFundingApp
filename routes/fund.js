const { Router } = require('express');
var express = require('express');
var router = express.Router();
var Doners = require('../models/users');


router.get('/add', function(req, res, next){
    res.render('addfund', {
        title: 'name of project  ',
    });
})

router.post('/save', function(req, res){
    // books.push({...req.body, _id: `00${books.length + 1}`});
    const doner = new Doners(req.body);
    let promise = doner.save();
    promise.then(()=>{
        console.log("fund  added");
        console.log(doner)
        res.redirect('/');
    })
})

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
    Books.findOne({_id: req.params._id}, function(err, book){
        res.render('editBooks',{title:'Edit Books', book: book});
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




router.get('/', function(req, res, next) {
  Doners.find({}, function(err, doners) {
     if (!err) {
       res.render('fund', { title: 'fund collection ', donerList: doners });
     } else {
       console.log('error', err);
     }
   })
 });
module.exports = router;