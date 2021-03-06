/**
 * @require ../support/css/property
 */

(function(getComputedStyle) {
	'use strict';

	var regexMatchImportant = /\s*!important$/;

	function definition(getCssProperty) {
		var storage = {
				general: {
					get: function(element, property) {
						return getComputedStyle(element, null).getPropertyValue(property[0]);
					},
					set: function(element, property, value) {
						if(value.replace) {
							element.style.setProperty(property[0], value.replace(regexMatchImportant, '') || value, regexMatchImportant.test(value) ? 'important' : '');
						} else {
							element.style[property[1]] = value;
						}
					}
				}
			};

		function add(property, hook) {
			if(property && hook && storage[property]) {
				storage[property] = hook;
			}
		}

		function get(property) {
			if(property && storage[property]) {
				return storage[property];
			}
		}

		function process(method, element, property, value) {
			var hook;

			property = getCssProperty(property, element);

			if(property) {
				return ((hook = get(property[1])) && hook[method] || get('general')[method])(element, property, value);
			}
		}

		return { add: add, get: get, process: process };
	}

	provide([ '../support/css/property' ], definition);
}(getComputedStyle));