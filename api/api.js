var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user');
var jwt = require('./services/jwt');

var app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/register', function(req, res) {

  var user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  var payload = {
    iss: req.hostname,
    sub: user._id,
  };

  var token = jwt.encode(payload, "shh..");

  user.save(function(err) {
    res.status(200).send({
      user: user.toJSON(),
      token: token,
    });
  });

});

mongoose.connect('mongodb://andy:corn@ds041377.mongolab.com:41377/token');

var server = app.listen(3000, function() {
  console.log('API listening on port', server.address().port);
});


