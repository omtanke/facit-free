import PropTypes from 'prop-types';

/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */
export const omit = (obj: { [x: string]: any }, omitKeys: string | string[]) => {
	const result = {};
	Object.keys(obj).forEach((key) => {
		if (omitKeys.indexOf(key) === -1) {
			// @ts-ignore
			result[key] = obj[key];
		}
	});
	return result;
};

/**
 * Returns a filtered copy of an object with only the specified keys.
 */
export const pick = (obj: { [x: string]: any }, keys: string[]) => {
	const pickKeys = Array.isArray(keys) ? keys : [keys];
	let { length } = pickKeys;
	let key;
	const result = {};

	while (length > 0) {
		length -= 1;
		key = pickKeys[length];
		// @ts-ignore
		result[key] = obj[key];
	}
	return result;
};

export const tagPropType = PropTypes.oneOfType([
	PropTypes.func,
	PropTypes.string,
	PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
	PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.func,
			PropTypes.string,
			PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
		]),
	),
]);

// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v5.0.1/scss/_variables.scss
export const TransitionTimeouts = {
	Fade: 150, // $transition-fade
	Collapse: 350, // $transition-collapse
	Modal: 300, // $modal-transition
	Carousel: 600, // $carousel-transition
};

// Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.
export const TransitionPropTypeKeys = [
	'in',
	'mountOnEnter',
	'unmountOnExit',
	'appear',
	'enter',
	'exit',
	'timeout',
	'onEnter',
	'onEntering',
	'onEntered',
	'onExit',
	'onExiting',
	'onExited',
];

export const TransitionStatuses = {
	ENTERING: 'entering',
	ENTERED: 'entered',
	EXITING: 'exiting',
	EXITED: 'exited',
};
