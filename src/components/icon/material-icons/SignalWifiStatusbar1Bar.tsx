import React, { SVGProps } from 'react';

const SvgSignalWifiStatusbar1Bar = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M17.65 15.34L24 8.98A16.88 16.88 0 0012 4C7.31 4 3.07 5.9 0 8.98l6.35 6.36C7.8 13.89 9.79 13 12 13s4.2.89 5.65 2.34z'
				fillOpacity={0.3}
			/>
			<path d='M17.65 15.34C16.2 13.89 14.21 13 12 13s-4.2.89-5.65 2.34L12 21l5.65-5.66z' />
		</svg>
	);
};

export default SvgSignalWifiStatusbar1Bar;
