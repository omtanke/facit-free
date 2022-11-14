import React, { SVGProps } from 'react';

const SvgSplitscreen = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path opacity={0.3} d='M6 4h12v5H6zM6 15h12v5H6z' />
			<path d='M18 2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 7H6V4h12v5zM18 13H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm0 7H6v-5h12v5z' />
		</svg>
	);
};

export default SvgSplitscreen;
