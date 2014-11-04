// Description:
//   Hash me!!
// Commands:
//   hubot hashme <algorithm> <phrase> - to create hash from phrase.
var hashMe = require('../lib/hashme');


module.exports = function(robot) {
	'use strict';

	robot.respond(/hashme (.*) (.*)/i, function(msg) {
		return msg.send(hashMe(msg.match[1], msg.match[2]));
	});
};
