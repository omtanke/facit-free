import React, { SVGProps } from 'react';

const SvgStop = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M8 8h8v8H8z' opacity={0.3} />
			<path d='M6 18h12V6H6v12zM8 8h8v8H8V8z' />
		</svg>
	);
};

export default SvgStop;
