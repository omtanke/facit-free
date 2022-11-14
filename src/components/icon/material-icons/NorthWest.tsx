import React, { SVGProps } from 'react';

const SvgNorthWest = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z' />
		</svg>
	);
};

export default SvgNorthWest;
