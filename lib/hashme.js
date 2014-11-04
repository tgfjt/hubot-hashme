var crypto = require('crypto');


module.exports = function(algorithm, msg) {
	'use strict';

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
