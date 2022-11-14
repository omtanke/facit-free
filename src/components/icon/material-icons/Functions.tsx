import React, { SVGProps } from 'react';

const SvgFunctions = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M18 17h-7l5-5-5-5h7V4H6v2l6.5 6L6 18v2h12z' />
		</svg>
	);
};

export default SvgFunctions;
