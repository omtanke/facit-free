import React, { SVGProps } from 'react';

const SvgVerticalDistribute = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z' />
		</svg>
	);
};

export default SvgVerticalDistribute;
