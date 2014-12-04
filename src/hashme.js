// Description:
//   Hash me!!
// Dependencies:
//   request: 2.49.0
// Commands:
//   hubot hashme <algorithm> <phrase> - to create hash from phrase.

var request = require('request');

var hashMe = require('../lib/hashme');


module.exports = function(robot) {
	'use strict';

	var hashList = ['sha1', 'md5', 'sha256', 'sha512'];

	robot.respond(/hashme (.*?) (.*)$/i, function(msg) {
		var hash;
		var algorithm = msg.match[1];
		var target = msg.match[2];

		if (hashList.indexOf(algorithm) === -1) {
			return msg.send('algorithm should to be... ' + hashList.join(', '));
		}

		if (/(h?ttps?:\/\/[-\w@:%\+.~#?&\/=]+)/i.test(target)) {
			request({uri: target},
				function (error) {
					if (error) {
						return msg.send('Could not Get document.');
					}
					return msg.send(hash.digest('hex'));
				})
				.on('data', function (data) {
					hash = hashMe(algorithm).update(data);
				})
				.on('error', function() {
					return msg.send('Could not Get document.');
				});
		} else {
			return msg.send(hashMe(algorithm, target));
		}
	});
};
