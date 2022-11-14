import React, { SVGProps } from 'react';

const SvgDoorBack = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M7 19h10V5H7v14zm2-8h2v2H9v-2z' opacity={0.3} />
			<path d='M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-2 0H7V5h10v14z' />
			<path d='M9 11h2v2H9z' />
		</svg>
	);
};

export default SvgDoorBack;
