// =======================
// package import
// =======================
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');

var cfg = require('./config');
var Logger = require('./lib/logger.js');
var logger = Logger().getLogger();
var app = express();

//========extra lib======================
var mongoose = require('mongoose');



//=======================
//configuration
//=======================
var port = parseInt(process.env.PORT,10) || cfg.port;
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }));
app.use(bodyParser.json({ limit: '1mb' }));

app.use(cookieParser('S3CRE7', {maxAge: 1200*1000})); // 20 minutes
//serve static resources without session
app.use(favicon(__dirname + '/favicon.ico'));

app.use(express.static(__dirname + '/public'));


require('./models/Posts');
require('./models/Comments');

//connect MongoDB
mongoose.connect('mongodb://localhost/news', function(err,db){
    if (!err){
        console.log('Connected to /news!');
    } else{
        console.dir(err); //failed to connect
    }
});


var server = http.createServer(app);
server.listen(port, function(){
  console.log('Express server listening on port ' + port);
  console.log('Now serving the app at http://localhost:' + port + '/app');
});

