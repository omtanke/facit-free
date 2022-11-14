import React, { SVGProps } from 'react';

const SvgCallReceived = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M15 17H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z' />
		</svg>
	);
};

export default SvgCallReceived;
