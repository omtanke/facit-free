import React, { SVGProps } from 'react';

const SvgHorizontalRule = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path fillRule='evenodd' d='M4 11h16v2H4z' />
		</svg>
	);
};

export default SvgHorizontalRule;
