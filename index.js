var fs = require('fs');
var path = require('path');


module.exports = function(robot) {
	'use strict';

	var dir = path.resolve(__dirname, 'src');

	fs.exists(dir, function(exists) {
		if (exists) {
			robot.loadFile(dir, 'hashme.js');
		}
	});
};
