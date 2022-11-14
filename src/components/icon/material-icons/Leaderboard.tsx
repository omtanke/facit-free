import React, { SVGProps } from 'react';

const SvgLeaderboard = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M10 5h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z' opacity={0.3} />
			<path d='M16 11V3H8v6H2v12h20V11h-6zm-6-6h4v14h-4V5zm-6 6h4v8H4v-8zm16 8h-4v-6h4v6z' />
		</svg>
	);
};

export default SvgLeaderboard;
