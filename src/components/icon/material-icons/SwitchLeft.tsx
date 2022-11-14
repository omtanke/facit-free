import React, { SVGProps } from 'react';

const SvgSwitchLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M8.5 8.62v6.76L5.12 12 8.5 8.62' />
			<path d='M8.5 8.62v6.76L5.12 12 8.5 8.62M10 5l-7 7 7 7V5zm4 0v14l7-7-7-7z' />
		</svg>
	);
};

export default SvgSwitchLeft;
