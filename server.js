'use strict';

var express = require('express');
var app = express();
var notesRoutes = express.Router();

require('./routes/notes-routes')(notesRoutes);

app.use('/', notesRoutes);

app.listen(3000, function() {
	console.log('server running on port 3000');
});