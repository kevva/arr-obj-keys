import test from 'ava';
import m from './';

test('get keys from an array of objects', t => {
	t.deepEqual(m([{
		cat: 'meow',
		foo: 'unicorn'
	}, {
		bar: 'foo'
	}, {
		unicorn: 'meow'
	}, {
		cat: 'foo',
		hello: ['there']
	}]), ['cat', 'foo', 'bar', 'unicorn', 'cat', 'hello']);
});

test('accepts an array', t => {
	t.throws(m.bind(null, 'string'), 'Expected an `Array`, got `string`');
});
