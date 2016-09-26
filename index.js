'use strict';

module.exports = arr => {
	if (!Array.isArray(arr)) {
		throw new TypeError(`Expected an \`Array\`, got \`${typeof arr}\``);
	}

	return arr.map(x => Object.keys(x)).reduce((a, b) => a.concat(b), []);
};
