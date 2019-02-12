var http = require("http");
var express = require('express');
var app = require('./config/express')(app);


http.createServer(app).listen(app.get('port'), function (){
  console.log('Express listen on port ' + app.get('port'));
});
