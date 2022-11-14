import React, { SVGProps } from 'react';

const SvgHourglassBottom = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M16 16.5l-4-4-4 4V20h8z' />
			<path opacity={0.3} d='M16 16.5l-4-4-4 4V20h8z' />
			<path d='M6 22h12v-6l-4-4 3.99-4.01L18 2H6l.01 5.99L10 12l-4 3.99V22zM8 7.5V4h8v3.5l-4 4-4-4zm0 9l4-4 4 4V20H8v-3.5z' />
		</svg>
	);
};

export default SvgHourglassBottom;
