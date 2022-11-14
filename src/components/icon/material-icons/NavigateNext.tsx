import React, { SVGProps } from 'react';

const SvgNavigateNext = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M10.02 18l6-6-6-6-1.41 1.41L13.19 12l-4.58 4.59z' />
		</svg>
	);
};

export default SvgNavigateNext;
