var express = require('express');
const bcrypt = require('bcrypt');
const { get } = require('.');
var router = express.Router();
let User = require('../models/users');


router.get('/add', function (req, res, next) {
    res.render('register', {
        title: 'Sign In',
    });
});


router.post('/save', async function (req, res, next) {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            name: req.body.name, 
            email: req.body.email,
             username: req.body.username,
              password:hashedPassword });
              let promise = user.save();
              promise.then(() => {
                  console.log('User added');
                  res.redirect('/');
              })
    } catch{
        res.status(500).send('error 500');
}
    // const user = new User({
    //      name: req.body.name, 
    //      email: req.body.email,
    //       username: req.body.username,
    //        password:hashedPassword });
    // let promise = user.save();
    // promise.then(() => {
    //     console.log('User added');
    //     res.redirect('/');
    // })
});


module.exports = router;

