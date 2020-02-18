const express = require('express');
const path = require('path');
const http = require('http');
const io = require('socket.io')(http)
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
const ObjectId = require('mongodb').ObjectId;
var cors = require('cors')

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: false
}))
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'reactchat';

// Create a new MongoClient
const client = new MongoClient(url);

client.connect(function (err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const chatRouter = require('./routes/chat')(db, ObjectId);
  app.use(cors());
  app.use('/api/chats', chatRouter);
});

module.exports = app;