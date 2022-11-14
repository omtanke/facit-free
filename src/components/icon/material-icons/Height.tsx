import React, { SVGProps } from 'react';

const SvgHeight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z' />
		</svg>
	);
};

export default SvgHeight;
