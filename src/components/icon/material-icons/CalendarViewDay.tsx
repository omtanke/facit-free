import React, { SVGProps } from 'react';

const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M3 17h18v2H3zm16-5v1H5v-1h14m2-2H3v5h18v-5zM3 6h18v2H3z' />
			<path d='M5 12h14v1H5z' opacity={0.3} />
		</svg>
	);
};

export default SvgCalendarViewDay;
