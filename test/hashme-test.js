var test = require('tape');

var crypto = require('crypto');

var hashMe = function(algorithm, msg) {
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

test('hashme wrong algorithm', function (t) {
	var wrong = hashMe('hoge', '123');

	t.equal(wrong, 'algorithm should to be... sha1, md5, sha256, sha512', 'to get Error message');

	t.end();
});

test('hashme sha1 123', function (t) {
	var sha1 = hashMe('sha1', '123');

	t.equal(sha1, '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 'to create sha1');

	t.end();
});

test('hashme sha256 123', function (t) {
	var sha256 = hashMe('sha256', '123');

	t.equal(sha256, 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'to create sha256');

	t.end();
});

test('hashme sha512 123', function (t) {
	var sha512 = hashMe('sha512', '123');

	t.equal(sha512, '3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2', 'to create sha512');

	t.end();
});

test('hashme md5 123', function (t) {
	var md5 = hashMe('md5', '123');

	t.equal(md5, '202cb962ac59075b964b07152d234b70', 'to create md5');

	t.end();
});
