'use strict';

const babel = require('babel-core');
const es2015 = require('babel-preset-es2015');
const Transform = require('@donotjs/donot-transform');

class ES5Transform extends Transform {

	canTransform(filename) {
		return /\.es5\.js/i.test(filename);
	}

	map(filename) {
		return filename.replace(/\.es5\.js/i, '.js');
	}

	compile(filename, data) {
		return new Promise((resolved, rejected) => {
			var result = babel.transform(data.toString(), {
				presets: [es2015],
				sourceMaps: true
			});
			resolved({
				data: new Buffer(result.code),
				map: result.map,
				files: [filename]
			});
		});
	}

}

module.exports = exports = ES5Transform;
