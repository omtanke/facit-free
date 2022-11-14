import React, { SVGProps } from 'react';

const SvgPersonalVideo = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 5h18v12H3z' opacity={0.3} />
			<path d='M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 002 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 00-2-2zm0 14H3V5h18v12z' />
		</svg>
	);
};

export default SvgPersonalVideo;
