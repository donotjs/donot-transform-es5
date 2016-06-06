/*jshint expr: true*/

'use strict';

const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const ES5Transform = require('../');

chai.should();
chai.use(chaiAsPromised);

var transform = new ES5Transform();

describe('transform', function() {

	it ('should return true when filename is .es5.js', () => {
		expect(transform.canTransform('my.es5.js')).to.be.true;
	});

	it ('should return false when filename is .js', () => {
		expect(transform.canTransform('my.js')).to.be.false;
	});

	it ('should compile to es5', () => {
		return transform.compile('test.es5.js', new Buffer('() => {}')).then((result) => {
			expect(result).to.be.an('object');
			expect(result.data).to.be.instanceOf(Buffer);
			expect(result.data.toString()).to.equal('"use strict";\n\n(function () {});');
		}).catch((err) => {
		}).should.eventually.be.fulfilled;
	});

});
