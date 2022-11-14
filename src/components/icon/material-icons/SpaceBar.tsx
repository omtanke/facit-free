import React, { SVGProps } from 'react';

const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M18 13H6V9H4v6h16V9h-2z' />
		</svg>
	);
};

export default SvgSpaceBar;
