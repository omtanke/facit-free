import React, { SVGProps } from 'react';

const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				opacity={0.3}
				d='M8.5 6H11v12H8.5zM13 6h2.5v12H13zM4 6h2.5v12H4zM17.5 6H20v12h-2.5z'
			/>
			<path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM6.5 18H4V6h2.5v12zm4.5 0H8.5V6H11v12zm4.5 0H13V6h2.5v12zm4.5 0h-2.5V6H20v12z' />
		</svg>
	);
};

export default SvgCalendarViewWeek;
