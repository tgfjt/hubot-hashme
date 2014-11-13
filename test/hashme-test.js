var test = require('tape');

var hashMe = require('../lib/hashme');


test('hashme regexp', function (t) {
	t.plan(6);

	var re = /hashme (.*?) (.*)$/i;

	var sample1 = 'hubot hashme sha1 This is some text'.match(re);
	var sample2 = 'hubot hashme sha512 http://example.com:5000'.match(re);
	var sample3 = 'hubot hashme FOO BAR BAZ'.match(re);

	t.equal(
		sample1[1],
		'sha1',
		'to get hash algorithm');

	t.equal(
		sample1[2],
		'This is some text',
		'to get message text');

	t.equal(
		sample2[1],
		'sha512',
		'to get hash algorithm');

	t.equal(
		sample2[2],
		'http://example.com:5000',
		'to get message text');

	t.equal(
		sample3[1],
		'FOO',
		'to get hash algorithm');

	t.equal(
		sample3[2],
		'BAR BAZ',
		'to get message text');
});

test('hashme wrong algorithm', function (t) {
	t.plan(1);

	var wrong = hashMe('hoge', '123');

	t.equal(wrong, 'algorithm should to be... sha1, md5, sha256, sha512', 'to get Error message');
});

test('hashme sha1 this is some text', function (t) {
	t.plan(1);

	t.equal(
		hashMe('sha1', 'this is some text'),
		'0393694d16b84deb612e47ce6252bd35f0d86c06', 'to create sha1');
});

test('hashme sha256 123', function (t) {
	t.plan(1);

	t.equal(
		hashMe('sha256', '123'),
		'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3', 'to create sha256');

	t.end();
});

test('hashme sha512 123', function (t) {
	t.plan(1);

	t.equal(
		hashMe('sha512', '123'),
		'3c9909afec25354d551dae21590bb26e38d53f2173b8d3dc3eee4c047e7ab1c1eb8b85103e3be7ba613b31bb5c9c36214dc9f14a42fd7a2fdb84856bca5c44c2', 'to create sha512');
});

test('hashme md5 123', function (t) {
	t.plan(1);

	t.equal(hashMe('md5', '123'), '202cb962ac59075b964b07152d234b70', 'to create md5');

	t.end();
});
