import React, { SVGProps } from 'react';

const SvgTitle = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 7h5.5v12h3V7H19V4H5z' />
		</svg>
	);
};

export default SvgTitle;
