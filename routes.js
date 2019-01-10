"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();
var models = require('./models');
var strftime = require('strftime');
var SpringfieldApplicant = models.SpringfieldApplicant;
var HopeApplicant = models.HopeApplicant;
var AfcApplicant = models.AfcApplicant;

router.get('/', function(req, res) {
      res.render('home')
});
router.get('/founders', function(req, res) {
      res.render('founders')
});
router.get('/about', function(req, res) {
      res.render('about')
});
router.get('/apply', function(req, res) {
      res.render('apply')
});
router.get('/applyshs', function(req, res) {
      res.render('applyshs')
});
router.get('/applyhope', function(req, res) {
      res.render('applyhope')
});
router.get('/applyafc', function(req, res) {
      res.render('applyafc')
});

router.post('/applyshs', function(req, res) {

  var newSpringfieldApplicant = new SpringfieldApplicant({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    gpa: req.body.gpa,
    classrank: req.body.classrank,
    classsize: req.body.classsize,
    act: req.body.act,
    sat: req.body.sat,
    category1: req.body.category1
  })
  newSpringfieldApplicant.save({}, function(err, results){
    if(err){
      res.render('applyshs', {category: category, error: err})
    } else {
      res.redirect('/')
    }
  })
});

router.post('/applyhope', function(req, res) {

  var newHopeApplicant = new HopeApplicant({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    gpa: req.body.gpa,
    classrank: req.body.classrank,
    classsize: req.body.classsize,
    act: req.body.act,
    sat: req.body.sat,
  })
  newHopeApplicant.save({}, function(err, results){
    if(err){
      res.render('applyhope', {category: category, error: err})
    } else {
      res.redirect('/')
    }
  })
});

router.post('/applyafc', function(req, res) {

  var newAfcApplicant = new AfcApplicant({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    gpa: req.body.gpa,
    classrank: req.body.classrank,
    classsize: req.body.classsize,
    act: req.body.act,
    sat: req.body.sat,
  })
  newAfcApplicant.save({}, function(err, results){
    if(err){
      res.render('applyafc', {category: category, error: err})
    } else {
      res.redirect('/')
    }
  })
});

module.exports = router;
