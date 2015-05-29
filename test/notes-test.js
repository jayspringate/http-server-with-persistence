'use strict';

require('../server');

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;

describe('notes', function() {

	it('should save a note', function () {
		chai.request('localhost:3000')
			.post('/data')
			.send({msg: 'test note'})
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('test note');
			});
	});

	it('should get all notes', function() {
		chai.request('localhost:3000')
			.get('/data')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(Array.isArray(res.body)).to.eql.true; // jshint ignore:line
				expect(res.body[0]).to.eql('file1.json'); 
			});
	});

	it('should update a note', function() {
		chai.request('localhost:3000')
			.put('/data/1')
			.send({msg: 'updated note'})
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('updated note');
			});
	});

	it('should delete a note', function() {
		chai.request('localhost:3000')
			.del('/data/1')
			.end(function(err, res) {
				expect(err).to.eql(null);
				expect(res.body.msg).to.eql('successful deletion');
			});
	});
});
