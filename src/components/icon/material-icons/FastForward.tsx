import React, { SVGProps } from 'react';

const SvgFastForward = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<g fill='none'>
				<path d='M0 0h24v24H0z' />
				<path d='M0 0h24v24H0z' />
				<path d='M0 0h24v24H0z' />
			</g>
			<path opacity={0.3} d='M15 9.86v4.28L18.03 12zM6 9.86v4.28L9.03 12z' />
			<path d='M4 18l8.5-6L4 6v12zm2-8.14L9.03 12 6 14.14V9.86zM21.5 12L13 6v12l8.5-6zM15 9.86L18.03 12 15 14.14V9.86z' />
		</svg>
	);
};

export default SvgFastForward;
