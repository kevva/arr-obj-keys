'use strict';
var deepEqual = require('deep-equal');
var test = require('ava');
var arrObjKeys = require('./');

test(function (t) {
	var arr = arrObjKeys([{
		cat: 'meow'
	}, {
		foo: 'bar'
	}, {
		unicorn: 'foo'
	}, {
		cat: 'meow'
	}]);

	t.assert(deepEqual(arr, ['cat', 'foo', 'unicorn', 'cat']));
});
