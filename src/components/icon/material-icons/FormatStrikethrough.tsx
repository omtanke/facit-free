import React, { SVGProps } from 'react';

const SvgFormatStrikethrough = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 12h18v2H3zm11-2V7h5V4H5v3h5v3zm-4 6h4v3h-4z' />
		</svg>
	);
};

export default SvgFormatStrikethrough;
