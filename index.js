var fs = require('fs');
var path = require('path');

var dir = path.resolve(__dirname, 'src');

fs.exists(dir, function(exists) {
	if (exists) {
		robot.loadFile(path.resolve(dir, 'hashme.coffee'));
	}
});
