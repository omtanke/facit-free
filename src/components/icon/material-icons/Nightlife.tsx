import React, { SVGProps } from 'react';

const SvgNightlife = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M1 5h14l-6 9v4h2v2H5v-2h2v-4L1 5zm9.1 4l1.4-2H4.49l1.4 2h4.21zM17 5h5v3h-3v9c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3a3 3 0 011 .17V5z' />
		</svg>
	);
};

export default SvgNightlife;
