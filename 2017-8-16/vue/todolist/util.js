let extend = (...args) => {
	var newObj = {};
	for (var i = 0; i < args.length; i++) {
		var obj = args[i];
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				newObj[key] = obj[key];
			}
		}
	}
	return newObj;
}

let store = (namespace, data) => {
	if (data) {
		return localStorage.setItem(namespace, JSON.stringify(data));
	}

	var store = localStorage.getItem(namespace);
	return (store && JSON.parse(store)) || [];
}

let hasOwn = {}.hasOwnProperty;
let classNames = (...args) => {
	var classes = '';

	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		if (!arg) continue;

		var argType = typeof arg;

		if (argType === 'string' || argType === 'number') {
			classes += ' ' + arg;
		} else if (Array.isArray(arg)) {
			classes += ' ' + classNames.apply(null, arg);
		} else if (argType === 'object') {
			for (var key in arg) {
				if (hasOwn.call(arg, key) && arg[key]) {
					classes += ' ' + key;
				}
			}
		}
	}

	return classes.substr(1);
}

export {extend,store,classNames}