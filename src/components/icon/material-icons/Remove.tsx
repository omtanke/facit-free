import React, { SVGProps } from 'react';

const SvgRemove = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M19 13H5v-2h14v2z' />
		</svg>
	);
};

export default SvgRemove;
