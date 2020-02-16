
// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3030;

// Expose the public directory to access files
app.use(express.static('app/public'));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Routes
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});