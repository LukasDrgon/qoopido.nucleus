/**
 * Qoopido function/merge
 *
 * Function to deep merge any number of data structures. First argument is the target and will be modified!
 *
 * Copyright (c) 2015 Dirk Lueth
 *
 * Dual licensed under the MIT and GPL licenses.
 *  - http://www.opensource.org/licenses/mit-license.php
 *  - http://www.gnu.org/copyleft/gpl.html
 *
 * @author Dirk Lueth <info@qoopido.com>
 *
 * @use /demand/validator/isObject
 */

(function(undefined) {
	'use strict';

	function definition(isObject) {
		return function functionMerge() {
			var target = arguments[0],
				i = 1, properties, property, targetProperty, targetPropertyIsObject, sourceProperty;

			for(; (properties = arguments[i]) !== undefined; i++) {
				for(property in properties) {
					targetProperty = target[property];
					sourceProperty = properties[property];

					if(sourceProperty !== undefined) {
						if(isObject(sourceProperty)) {
							targetPropertyIsObject = isObject(targetProperty);
							
							if(sourceProperty.length !== undefined) {
								targetProperty = (targetPropertyIsObject && targetProperty.length !== undefined) ? targetProperty : [];
							} else {
								targetProperty = (targetPropertyIsObject && targetProperty.length === undefined) ? targetProperty : {};
							}

							target[property] = functionMerge(targetProperty, sourceProperty);
						} else {
							target[property] = sourceProperty;
						}
					}
				}
			}

			return target;
		};
	}

	provide([ '/demand/validator/isObject' ], definition);
}());