import React, { SVGProps } from 'react';

const SvgArrowBackIos = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' opacity={0.87} />
			<path d='M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z' />
		</svg>
	);
};

export default SvgArrowBackIos;
