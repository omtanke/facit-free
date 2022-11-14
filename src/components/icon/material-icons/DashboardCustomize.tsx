import React, { SVGProps } from 'react';

const SvgDashboardCustomize = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path opacity={0.3} d='M5 15h4v4H5zM5 5h4v4H5zM15 5h4v4h-4z' />
			<path d='M3 11h8V3H3v8zm2-6h4v4H5V5zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM18 13h-2v3h-3v2h3v3h2v-3h3v-2h-3z' />
		</svg>
	);
};

export default SvgDashboardCustomize;
