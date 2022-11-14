import React, { SVGProps } from 'react';

const SvgMinimize = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M6 19h12v2H6v-2z' />
		</svg>
	);
};

export default SvgMinimize;
