var express = require('express');
var router = express.Router();

var Equation = require('../models/Equation');

router.get('/equations', function(req, res, next) {
  Equation.find({},function(err, equations){
    res.status(200).send( equations );
  });
});

router.get('/equation/:id', function(req, res, next) {
  Equation.findOne({
    id: req.param.id
  },function(err, equation){
    res.status(200).send( equation );
  });
});

router.get('/', function(req, res, next) {
  res.status(200).send('test');
});

router.post('/equation', function(req, res, next){
  Equation({
    name: req.body.name || '',
    area: req.body.area || '',
    equation: req.body.equation || '',
    discoveredBy:req.body.discoveredBy || '',
    lastEdited: Date.now(),
    firstCreated: Date.now()
  }).save();
  res.status(200);
});

module.exports = router;
