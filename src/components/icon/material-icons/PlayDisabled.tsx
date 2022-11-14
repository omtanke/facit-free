import React, { SVGProps } from 'react';

const SvgPlayDisabled = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M10 12.83v2.53l1.55-.99z' />
			<path d='M2.81 2.81L1.39 4.22 8 10.83V19l4.99-3.18 6.78 6.78 1.41-1.41L2.81 2.81zM10 15.36v-2.53l1.55 1.55-1.55.98zM19 12L8 5v.17l8.45 8.45L19 12z' />
		</svg>
	);
};

export default SvgPlayDisabled;
