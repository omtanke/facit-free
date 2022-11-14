import React, { SVGProps } from 'react';

const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				opacity={0.3}
				d='M19 16.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z'
			/>
			<path d='M17 7l-5-4-5 7-4-3v13h18V7h-4zm2 9.95l-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19v7.95z' />
		</svg>
	);
};

export default SvgAreaChart;
