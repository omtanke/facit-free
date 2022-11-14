import React, { SVGProps } from 'react';

const SvgAlignHorizontalRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M20 2h2v20h-2V2zM2 10h16V7H2v3zm6 7h10v-3H8v3z' />
		</svg>
	);
};

export default SvgAlignHorizontalRight;
