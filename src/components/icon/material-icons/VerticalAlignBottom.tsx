import React, { SVGProps } from 'react';

const SvgVerticalAlignBottom = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z' />
		</svg>
	);
};

export default SvgVerticalAlignBottom;
