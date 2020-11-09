var express = require('express');
const { get } = require('.');
var router = express.Router();
let User = require('../models/users');


router.get('/add', function (req, res, next) {
    res.render('register', {
        title: 'Sign In',
    });
});


router.post('/save', function (req, res, next) {
    const user = new User(req.body);
    let promise = user.save();
    promise.then(() =>{
        console.log('User added');
        res.redirect('/');
    })
});


module.exports = router;

