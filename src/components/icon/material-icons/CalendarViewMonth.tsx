import React, { SVGProps } from 'react';

const SvgCalendarViewMonth = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				opacity={0.3}
				d='M4 6h4v5H4zM4 13h4v5H4zM10 13h4v5h-4zM16 13h4v5h-4zM16 6h4v5h-4zM10 6h4v5h-4z'
			/>
			<path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM8 18H4v-5h4v5zm0-7H4V6h4v5zm6 7h-4v-5h4v5zm0-7h-4V6h4v5zm6 7h-4v-5h4v5zm0-7h-4V6h4v5z' />
		</svg>
	);
};

export default SvgCalendarViewMonth;
