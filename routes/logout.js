var express = require('express');
const { get } = require('.');
var router = express.Router();
const User = require('../models/users');
let Projects = require('../models/projects');
// let Projects = require('../models/projects');
// router.get('/', function(req, res, next) {
//     Projects.find({}, function(err, projects) { 
//           if (!err) {
//        res.render('index', { title: 'CrowdFund App', projectList: projects });
//      } else {
//         console.log('error', err);
//      }
//     })
 
//   });

  router.get('/', function (req, res, next) {
    const user = User.findOne({username: req.body.username});
    if (user == null) {
        return res.status(400).send('Cannot logout user');
    }
    else{
        Projects.find({}, function(err, projects) { 
                      if (!err) {
                   res.render('index', { title: 'CrowdFund App', projectList: projects });
                 } else {
                    console.log('error', err);
                 }
                });
    }
});


module.exports = router;