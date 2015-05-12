'use strict';

require('../server');

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;

describe('notes', function() {

	it('should save a note', function () {
		chai.request('localhost:3000')
			.post('notes/file')
	})
}
