import React, { SVGProps } from 'react';

const SvgSouthWest = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z' />
		</svg>
	);
};

export default SvgSouthWest;
