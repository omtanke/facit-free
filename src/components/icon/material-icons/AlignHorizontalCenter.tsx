import React, { SVGProps } from 'react';

const SvgAlignHorizontalCenter = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M11 2h2v5h8v3h-8v4h5v3h-5v5h-2v-5H6v-3h5v-4H3V7h8z' />
		</svg>
	);
};

export default SvgAlignHorizontalCenter;
