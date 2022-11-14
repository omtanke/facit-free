import React, { SVGProps } from 'react';

const SvgCases = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M7 7h14v9H7z' />
			<path d='M3 9H1v11c0 1.11.89 2 2 2h17v-2H3V9z' />
			<path d='M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5h-5zm-6-2h4v2h-4V3zm9 13H7V7h14v9z' />
		</svg>
	);
};

export default SvgCases;
