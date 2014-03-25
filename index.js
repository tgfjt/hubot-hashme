var fs = require('fs');
var path = require('path');

var dir = path.resolve(__dirname, 'src');

module.exports = function(robot) {
	fs.exists(dir, function(exists) {
		if (exists) {
			robot.loadFile(dir, 'hashme.js');
		}
	});
}
