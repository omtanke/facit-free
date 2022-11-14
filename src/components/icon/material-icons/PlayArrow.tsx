import React, { SVGProps } from 'react';

const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M10 8.64v6.72L15.27 12z' opacity={0.3} />
			<path d='M8 19l11-7L8 5v14zm2-10.36L15.27 12 10 15.36V8.64z' />
		</svg>
	);
};

export default SvgPlayArrow;
