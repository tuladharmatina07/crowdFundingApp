var express = require('express');
const { get } = require('.');
var router = express.Router();
var multer  = require('multer');
var path = require('path');
router.use(express.static(__dirname+"./public"));

var Storage = multer.diskStorage({
    destination:"./public/uploads/",
    file:(req, file, cb) =>{
        cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
});

var upload = multer({
    storage: Storage
}).single('file');

//database collections
let Projects = require('../models/projects');


router.get('/add', function (req, res, next) {
    res.render('addProject', {
        title: 'Add Project',
    });
});


router.post('/save', upload, function (req, res, next) {
    const project = new Projects({...req.body, file:req.file.filename});
    let promise = project.save();
    promise.then(() =>{
        console.log('Project added');
        res.redirect('/adminView');
    })
})

router.get('/remove/:id', function(req, res){
    Projects.remove({ _id: req.params.id}, function(){
        res.redirect('/adminView');
    })
});

router.get('/loadmore/:_id', function(req, res){
    Projects.findOne({ _id: req.params._id} , function(err, project){
        res.render('loadmore', {project:project});
    })
    
});
router.get('/edit/:_id', function(req, res){
    Projects.findOne({ _id: req.params._id} , function(err, project){
        res.render('editProject', {title: 'Edit Project', project:project});
    })
    
});

router.post('/editSave/:_id', upload, function (req, res){
    if (req.file){
        Projects.findOneAndUpdate({ _id: req.params._id }, { $set: {...req.body, file:req.file.filename} }, function(err, project) {
            console.log(project);
            res.redirect('/adminView');
            })
    }
    else{
        Projects.findOneAndUpdate({ _id: req.params._id }, { $set: req.body }, function(err, project) {
            console.log(project);
            res.redirect('/adminView');
            }) 
    }
    

});

module.exports = router;


