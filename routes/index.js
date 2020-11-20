var express = require('express');
var router = express.Router();
let Projects = require('../models/projects');
//let user = require('../models/users');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//Promise
 router.get('/', function(req, res, next) {

   Projects.find({}, function(err, projects) { 
         if (!err) {
      res.render('index', { title: 'CrowdFund App', projectList: projects });
    } else {
       console.log('error', err);
    }
   })

 });

 router.get('/adminView', function(req, res, next) {
  Projects.find({}, function(err, projects) { 
        if (!err) {
     res.render('adminView', { title: 'CrowdFund App', projectList: projects });
   } else {
      console.log('error', err);
   }
  })

});




// module.exports = router;
// router.get('/', async function(req, res, next) {
//   //res.render('index', { title: 'Project', projectList:books });
//   let projects = await Projects.find();
//   //console.log(books);
//   res.render('index', { title: 'CrowdFund', projectList: projects });
// });

module.exports = router;