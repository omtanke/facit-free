import React, { SVGProps } from 'react';

const SvgMaximize = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 3h18v2H3V3z' />
		</svg>
	);
};

export default SvgMaximize;
