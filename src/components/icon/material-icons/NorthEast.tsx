import React, { SVGProps } from 'react';

const SvgNorthEast = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z' />
		</svg>
	);
};

export default SvgNorthEast;
