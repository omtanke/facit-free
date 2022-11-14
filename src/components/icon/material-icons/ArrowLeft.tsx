import React, { SVGProps } from 'react';

const SvgArrowLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M24 0v24H0V0h24z' fill='none' opacity={0.87} />
			<path d='M14 7l-5 5 5 5V7z' />
		</svg>
	);
};

export default SvgArrowLeft;
