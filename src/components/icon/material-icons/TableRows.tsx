import React, { SVGProps } from 'react';

const SvgTableRows = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 5v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z' opacity={0.3} />
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h14zm0 5v4H5v-4h14zM5 19v-3h14v3H5z' />
		</svg>
	);
};

export default SvgTableRows;
