import React, { SVGProps } from 'react';

const SvgCallMissed = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 10.41l7 7 9-9L19.59 7 12 14.59 6.41 9H11V7H3v8h2z' />
		</svg>
	);
};

export default SvgCallMissed;
