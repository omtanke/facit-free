import React, { SVGProps } from 'react';

const SvgViewStream = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 17H5v-4h14v4zM5 11V7h14v4H5z' opacity={0.3} />
			<path d='M3 7v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 10H5v-4h14v4zM5 11V7h14v4H5z' />
		</svg>
	);
};

export default SvgViewStream;
