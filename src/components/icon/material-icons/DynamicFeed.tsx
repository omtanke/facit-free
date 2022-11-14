import React, { SVGProps } from 'react';

const SvgDynamicFeed = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M12 7h8v4h-8z' />
			<path d='M8 8H6v7c0 1.1.9 2 2 2h9v-2H8V8z' />
			<path d='M20 3h-8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 8h-8V7h8v4zM4 12H2v7c0 1.1.9 2 2 2h9v-2H4v-7z' />
		</svg>
	);
};

export default SvgDynamicFeed;
