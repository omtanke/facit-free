import React, { SVGProps } from 'react';

const SvgSensorWindow = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M18 4v7h-4v-1h-4v1H6V4h12zM6 20v-7h12v7H6z' opacity={0.3} />
			<path d='M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 2v7h-4v-1h-4v1H6V4h12zM6 20v-7h12v7H6z' />
		</svg>
	);
};

export default SvgSensorWindow;
