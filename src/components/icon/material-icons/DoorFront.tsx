import React, { SVGProps } from 'react';

const SvgDoorFront = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 19h10V5H7v14zm6-8h2v2h-2v-2z' opacity={0.3} />
			<path d='M13 11h2v2h-2z' />
			<path d='M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z' />
		</svg>
	);
};

export default SvgDoorFront;
