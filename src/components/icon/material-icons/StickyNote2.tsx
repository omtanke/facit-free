import React, { SVGProps } from 'react';

const SvgStickyNote2 = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5 5v14h9v-5h5V5H5zm7 9H7v-2h5v2zm5-4H7V8h10v2z' opacity={0.3} />
			<path d='M19 5v9h-5v5H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10l6-6V5c0-1.1-.9-2-2-2zm-7 11H7v-2h5v2zm5-4H7V8h10v2z' />
		</svg>
	);
};

export default SvgStickyNote2;
