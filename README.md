donot-transform-es5
===================

[![Build Status](https://travis-ci.org/donotjs/donot-transform-es5.svg?branch=master)](https://travis-ci.org/donotjs/donot-transform-es5)

[es5 (babel)](http://npmjs.org/packages/babel) compiler and renderer for [donot](http://github.com/donotjs/donot).

# Usage

Using the es5 donot transform plug-in is pretty easy.

	var http = require('http'),
	    donot = require('donot'),
	    ES5Tranform = require('donot-transform-es5');

	var server = http.createServer(donot(__dirname + '/public', {
		transforms: [ new ES5Transform({
			// Options
		}) ]
	}));

	server.listen(8000);

Now `.js` files in the `/public` folder will automatically be compiled, rendered and served as es5 compiled versions with the `.es5.js` extension.

# License

MIT
