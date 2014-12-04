var crypto = require('crypto');


module.exports = function(algorithm) {
	return crypto.createHash(algorithm);
};
