# arr-obj-keys [![Build Status](https://travis-ci.org/kevva/arr-obj-keys.svg?branch=master)](https://travis-ci.org/kevva/arr-obj-keys)

> Get the unique keys of an array of objects


## Install

```
$ npm install --save arr-obj-keys
```


## Usage

```js
var arrObjKeys = require('arr-obj-keys');

arrObjKeys([{
	cat: 'meow'
}, {
	foo: 'bar'
}, {
	unicorn: 'foo'
}, {
	cat: 'meow'
}]);
//=> ['cat', 'foo', 'unicorn']
```


## API

### arrObjKeys(array)

#### array

*Required*  
Type: `array`

An array of objects with the keys you want to get.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
