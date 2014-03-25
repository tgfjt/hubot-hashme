/**
 * Description:
 *   Hash me!!
 *
 * Dependencies:
 *   "crypto": "0.0.3"
 *
 * Commands:
 *   hubot hashme <algorithm> <phrase> - to create hash from phrase.
 */

var crypto, hashMe;

crypto = require('crypto');

hashMe = function(algorithm, msg) {
	var errMsg, hash, hashList;
	errMsg = '';
	hashList = ['sha1', 'md5', 'sha256', 'sha512'];

	if (hashList.indexOf(algorithm) === -1) {
		errMsg = 'algorithm should to be... ' + hashList.join(', ');
		return errMsg;
	}

	hash = crypto.createHash(algorithm);
	hash.update(msg);

	return hash.digest('hex');
};

module.exports = function(robot) {
	robot.respond(/hashme (.*) (.*)/i, function(msg) {
		return msg.send(hashMe(msg.match[1], msg.match[2]));
	});
};
