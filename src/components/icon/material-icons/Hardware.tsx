import React, { SVGProps } from 'react';

const SvgHardware = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M6.77 6H11v5h2V5H9c-.89 0-1.68.39-2.23 1zM11 13h2v6h-2z' opacity={0.3} />
			<path d='M18 3l-3 3V3H9C6.24 3 4 5.24 4 8h5v12c0 .55.45 1 1 1h4c.55 0 1-.45 1-1V8l3 3h2V3h-2zm-5 16h-2v-6h2v6zm0-8h-2V6H6.77C7.32 5.39 8.11 5 9 5h4v6z' />
		</svg>
	);
};

export default SvgHardware;
