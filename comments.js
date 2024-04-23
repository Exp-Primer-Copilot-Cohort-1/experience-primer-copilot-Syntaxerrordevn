// Create web server
var express = require('express');
var app = express();
// Create web server
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create web server
var cors = require('cors');
app.use(cors());
// Create web server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments');
var Comment = require('./models/comment');
// Create web server
app.get('/comments', function(req, res) {
  Comment.find({}, function(err, comments) {
    res.json(comments);
  });
});
// Create web server
app.post('/comments', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      res.send(err);
    }
    res.send({ message: 'Comment Added' });
  });
});
// Create web server
app.listen(3001, function() {
  console.log('API Server running on port 3001');
});
// Path: comment.js
// Create web server
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Create web server
var CommentSchema = new Schema({