var express = require('express');
const bcrypt = require('bcrypt');
const { get } = require('.');
var router = express.Router();
let User = require('../models/users');
const users = require('../models/users');


router.get('/add', function (req, res, next) {
    res.render('login', {
        title: 'Log In',
    });
});

router.post('/auth', async function (req, res) {
    const user = User.find({username: req.body.username});
    if (user == null) {
        return res.status(400).send('Cannot find user');
    }


    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            console.log(user.username + "::" + user.password);
            res.redirect('/');
            // res.send('Login Success')
        } else {
            res.redirect('/login/add');
            console.log('user not found');
            //res.send('Login failed')
        }
    } catch {
        res.status(500).send('Login Failed');
    }
    // var username =  req.body.username;
    // var password = req.body.password;
    // User.findOne ({ username: username } && {password:password},function(err,user){
    //     if(user){
    //         console.log(user.username + "::" + user.password);
    //         res.redirect('/');
    //     }else{
    //         res.redirect('/login/add');
    //         console.log('user not found');

    //     }


});



module.exports = router;