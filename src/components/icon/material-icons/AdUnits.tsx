import React, { SVGProps } from 'react';

const SvgAdUnits = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M7 3h10v1H7zM7 20h10v1H7z' />
			<path d='M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM7 4V3h10v1H7zm0 14V6h10v12H7zm0 3v-1h10v1H7z' />
			<path d='M16 7H8v2h8V7z' />
		</svg>
	);
};

export default SvgAdUnits;
