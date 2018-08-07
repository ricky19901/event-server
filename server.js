// Core Server
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');

// Controllers
var eventController = require("./controllers/event.controller");
var loginController = require("./controllers/login.controller");

/* ---------- SERVER CONFIGURATION ---------- */

//Initialize the App
var app = express();

// Load up API version for future use
const { version: appVersion } = require('./package.json')
const { apiKey: key } = require("./config.json");

// Set up some simple compression and request limits.
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('v', appVersion);
  next();
});

app.use(compression({ filter: shouldCompress }));
app.use(bodyParser.json({ limit: '10mb' }));                        // Support JSON-encoded bodies
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));  // Support URL-encoded bodies

function shouldCompress(req, res) {
  // Don't compress responses with this request header
  if (req.headers['x-no-compression']) {
    return false
  }

  // Fallback to standard filter function
  return compression.filter(req, res)
}

/* ---------- SERVER CALLS ---------- */

app.get('/', function (req, res) {
  res.send(`Event Demo API v${appVersion} development Server is up`);
});

// CREATE EVENT
app.post("/event",function (req, res) {
  var event = JSON.parse(req.body.event);
  eventController.createEvent(event, req.body.token).then((result) => {
    console.log(result);
    res.statusCode = 200;
    res.send(result);
  }).catch((error) => {
    console.log(error);
    res.statusCode = 500;
    res.send(error);
  });
});

// READ EVENT
app.get('/event/:id', function (req, res) {
  eventController.getEventById(req.params.id, req.params.token).then((result) => {
    console.log(result);
    res.statusCode = 200;
    res.send(result);
  }).catch((error) => {
    console.log(error);
    res.statusCode = 500;
    res.send(error);
  });
});

// UPDATE EVENT
app.put("/event",function (req, res) {
  var event = JSON.parse(req.body.event);
  eventController.updateEvent(event, req.body.token).then((result) => {
    console.log(result);
    res.statusCode = 200;
    res.send(result);
  }).catch((error) => {
    console.log(error);
    res.statusCode = 500;
    res.send(error);
  });
});

// DELETE EVENT
app.delete('/event', function (req, res) {
  eventController.deleteEvent(req.body.id, req.body.token).then((result) => {
    console.log(result);
    res.statusCode = 200;
    res.send(result);
  }).catch((error) => {
    console.log(error);
    res.statusCode = 500;
    res.send(error);
  });
});

// LOGIN
app.post("/login",function (req, res) {
  loginController.login(req.body.username, req.body.password).then((result) => {
    console.log(result);
    res.statusCode = 200;
    res.send(result);
  }).catch((error) => {
    console.log(error);
    res.statusCode = 500;
    res.send(error);
  });
});

/* ---------- SERVER INITIALIZATION ---------- */

const port = process.argv[2] ? process.argv[2] : 8080;
var server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`I'm listening in port: ${port}`);
});
