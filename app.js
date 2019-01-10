"use strict";

// Express setup
var fs = require('fs');
var mustache = require('mustache');
var engines = require('consolidate');
var http = require('http');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Initialize Express
var app = express();

// mongoose configuration
var mongoose = require('mongoose');

if (! fs.existsSync('./env.sh')) {
  throw new Error('env.sh file is missing');
}
if (! process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}
mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});
mongoose.connection.on('error', function() {
  console.log('Error connecting to MongoDb. Check MONGODB_URI in env.sh');
  process.exit(1);
});
mongoose.connect(process.env.MONGODB_URI);

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


// Parse req.body contents
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Read static files in /public
app.use(express.static('public'))

// All of our routes are in routes.js
var routes = require('./routes');
app.use('/', routes);

console.log('Express started. Listening on port', process.env.PORT || 3000);
app.listen(process.env.PORT || 3000);





// $('#home').on('click', function(event){
//   window.location.href='home.html';
// })
// $('#founder').on('click', function(event){
//   window.location.href='founder.html';
// })
// $('#about').on('click', function(event){
//   window.location.href='about.html';
// })
// $('#apply').on('click', function(event){
//   window.location.href='apply.html';
// })
// $('#shs-apply-btn').on('click', function(event){
//   window.location.href='https://goo.gl/forms/aIstcnmXL7Kgl3X63';
// })
// $('#sshs-apply-btn').on('click', function(event){
//   window.location.href='https://goo.gl/forms/aIstcnmXL7Kgl3X63';
// })
// $('#lhs-apply-btn').on('click', function(event){
//   window.location.href='https://goo.gl/forms/aIstcnmXL7Kgl3X63';
// })
// $('#hope-apply-btn').on('click', function(event){
//   window.location.href='https://goo.gl/forms/aIstcnmXL7Kgl3X63';
// })
// $('#afc-apply-btn').on('click', function(event){
//   window.location.href='https://goo.gl/forms/aIstcnmXL7Kgl3X63';
// })
//
// $('#sendMail').click(function(){
//     $(location).attr('href', 'mailto:sinha.scholarship@gmail.com?subject='
//                              + encodeURIComponent($('#emailSubj').val())
//                              + "&body="
//                              + encodeURIComponent($('#emailText').val())
//     );
// });
