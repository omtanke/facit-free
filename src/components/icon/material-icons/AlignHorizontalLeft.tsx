import React, { SVGProps } from 'react';

const SvgAlignHorizontalLeft = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z' />
		</svg>
	);
};

export default SvgAlignHorizontalLeft;
