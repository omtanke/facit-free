import React, { SVGProps } from 'react';

const SvgViewCarousel = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M9 7h6v10H9z' />
			<path d='M2 7h4v10H2V7zm5 12h10V5H7v14zM9 7h6v10H9V7zm9 0h4v10h-4V7z' />
		</svg>
	);
};

export default SvgViewCarousel;
