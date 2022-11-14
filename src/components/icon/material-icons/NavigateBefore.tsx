import React, { SVGProps } from 'react';

const SvgNavigateBefore = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z' />
		</svg>
	);
};

export default SvgNavigateBefore;
