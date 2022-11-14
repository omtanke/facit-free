import React, { SVGProps } from 'react';

const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M10 17l5-5-5-5v10z' />
		</svg>
	);
};

export default SvgArrowRight;
