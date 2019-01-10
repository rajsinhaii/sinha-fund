var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;

mongoose.connect(connect);
var springfieldApplicantSchema = new mongoose.Schema({
  name: {
     type: String,
     require: true
   },
   email: {
     type: String,
     require: true
   },
   phone: {
     type: Number,
     require: true
   },
   address: {
     type: String,
     require: true
   },
   city: {
     type: String,
     require: true
   },
   state: {
     type: String,
     require: true
   },
   zip: {
     type: Number,
     require: true
   },
   gpa: {
     type: Number,
     require: true
   },
   classrank: {
     type: Number,
     require: true
   },
   classsize: {
     type: Number,
     require: true
   },
   act: {
     type: Number,
     require: true
   },
   sat: {
     type: Number,
     require: true
   },
   category1: {
     type: String,
     require: true
   }
});

var hopeApplicantSchema = new mongoose.Schema({
  name: {
     type: String,
     require: true
   },
   email: {
     type: String,
     require: true
   },
   phone: {
     type: Number,
     require: true
   },
   address: {
     type: String,
     require: true
   },
   city: {
     type: String,
     require: true
   },
   state: {
     type: String,
     require: true
   },
   zip: {
     type: Number,
     require: true
   },
   gpa: {
     type: Number,
     require: true
   },
   classrank: {
     type: Number,
     require: true
   },
   classsize: {
     type: Number,
     require: true
   },
   act: {
     type: Number,
     require: true
   },
   sat: {
     type: Number,
     require: true
   },
});

var afcApplicantSchema = new mongoose.Schema({
  name: {
     type: String,
     require: true
   },
   email: {
     type: String,
     require: true
   },
   phone: {
     type: Number,
     require: true
   },
   address: {
     type: String,
     require: true
   },
   city: {
     type: String,
     require: true
   },
   state: {
     type: String,
     require: true
   },
   zip: {
     type: Number,
     require: true
   },
   gpa: {
     type: Number,
     require: true
   },
   classrank: {
     type: Number,
     require: true
   },
   classsize: {
     type: Number,
     require: true
   },
   act: {
     type: Number,
     require: true
   },
   sat: {
     type: Number,
     require: true
   },
});


var SpringfieldApplicant = mongoose.model("SpringfieldApplicant", springfieldApplicantSchema);
var HopeApplicant = mongoose.model("HopeApplicant", hopeApplicantSchema);
var AfcApplicant = mongoose.model("AfcApplicant", afcApplicantSchema);

module.exports = {
  SpringfieldApplicant: SpringfieldApplicant,
  HopeApplicant: HopeApplicant,
  AfcApplicant: AfcApplicant,
}
