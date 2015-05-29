'use strict';

var bodyParser = require('body-parser');
var fs = require('fs');

module.exports = function(router) {

	var fileNumber = 1;

	router.use(bodyParser.json());

	router.post('/data', function(req, res) {
		var noteObject = req.body;
				noteObject.id = fileNumber;
			fs.writeFile('./data/file' + fileNumber + '.json', JSON.stringify(noteObject), function(err) {
				if (err) {
					console.log(err);
					return res.status(500).json({msg: 'server error'});
				}
				console.log('json file written to data folder');
			});
			res.json(noteObject);
			fileNumber++;
	});
	
	router.get('/data', function(req, res) {
		fs.readdir('./data', function (err, data) {
			if (err) {
				console.log(err);
				return res.status(500).json({msg: 'server error'});
			}
			console.log('get request received');
			res.json(data);
		}); 
	});

	router.put('/data/:id', function(req, res) {
		var noteObject = req.body;
				noteObject.id = parseInt(req.params.id);
		fs.writeFile('./data/file' + req.params.id + '.json', JSON.stringify(noteObject), function(err) {
				if (err) {
					console.log(err);
					return res.status(500).json({msg: 'server error'});
				}
				console.log('json file replaced in data folder');
			});
			res.json(noteObject);
	});

	router.delete('/data/:id', function(req, res) {
		var noteObject = req.body;
				noteObject.id = parseInt(req.params.id);
		fs.unlink('./data/file' + req.params.id + '.json', JSON.stringify(noteObject), function(err) {
				if (err) {
					console.log(err);
					return res.status(500).json({msg: 'server error'});
				}
			});
			console.log('json file deleted from data folder');
			res.json({msg: 'successful deletion'});
	});
	};



