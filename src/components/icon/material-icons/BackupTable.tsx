import React, { SVGProps } from 'react';

const SvgBackupTable = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M11 11h5v5h-5zM4 11h5v5H4zM4 4h12v5H4z' />
			<path d='M20 6v14H6v2h14c1.1 0 2-.9 2-2V6h-2z' />
			<path d='M18 16V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zM4 4h12v5H4V4zm5 12H4v-5h5v5zm2-5h5v5h-5v-5z' />
		</svg>
	);
};

export default SvgBackupTable;
