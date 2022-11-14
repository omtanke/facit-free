import React, { SVGProps } from 'react';

const SvgFormatSize = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 12h3v7h3v-7h3V9H3zm6-5h5v12h3V7h5V4H9z' />
		</svg>
	);
};

export default SvgFormatSize;
