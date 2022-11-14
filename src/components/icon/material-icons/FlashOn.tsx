import React, { SVGProps } from 'react';

const SvgFlashOn = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M17 10h-4l3-8H7v11h3v9z' />
		</svg>
	);
};

export default SvgFlashOn;
