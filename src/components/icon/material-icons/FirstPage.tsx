import React, { SVGProps } from 'react';

const SvgFirstPage = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M24 0v24H0V0h24z' fill='none' opacity={0.87} />
			<path d='M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6 1.41-1.41zM6 6h2v12H6V6z' />
		</svg>
	);
};

export default SvgFirstPage;
