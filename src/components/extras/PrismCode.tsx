import React, { createRef, CSSProperties, FC, useEffect } from 'react';
import Prism from 'prismjs';
import classNames from 'classnames';
import 'prismjs/components/prism-scss.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.min';
import PropTypes from 'prop-types';

interface IPrismCodeProps {
	code: string;
	plugins?: string | null;
	language: string | null | undefined;
	className?: string;
	style?: CSSProperties | undefined;
	rounded?: 'default' | 0 | 1 | 2 | 3 | 'bottom' | 'top' | 'circle' | 'end' | 'start' | 'pill';
}
const PrismCode: FC<IPrismCodeProps> = (props) => {
	const ref = createRef<HTMLElement>();

	useEffect(() => {
		if (ref && ref.current) {
			Prism.highlightElement(ref.current);
		}
		return () => {};
	}, [ref]);

	const { code, plugins, language, className, style, rounded } = props;
	return (
		<pre
			className={classNames('prismjs-code', plugins, className, {
				[`rounded${rounded !== 'default' ? `-${rounded}` : ''}`]: rounded,
			})}
			style={style}>
			<code ref={ref} className={`language-${language}`}>
				{code.trim()}
			</code>
		</pre>
	);
};
PrismCode.propTypes = {
	code: PropTypes.string.isRequired,
	plugins: PropTypes.string,
	language: PropTypes.string.isRequired,
	className: PropTypes.string,
	rounded: PropTypes.oneOf([
		'default',
		0,
		1,
		2,
		3,
		'bottom',
		'top',
		'circle',
		'end',
		'start',
		'pill',
	]),
	// eslint-disable-next-line react/forbid-prop-types
	style: PropTypes.object,
};
PrismCode.defaultProps = {
	plugins: null,
	className: undefined,
	rounded: 2,
	style: undefined,
};

export default PrismCode;
