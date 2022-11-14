import React, { SVGProps } from 'react';

const SvgUnfoldLess = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M24 0v24H0V0h24z' fill='none' opacity={0.87} />
			<path d='M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z' />
		</svg>
	);
};

export default SvgUnfoldLess;
