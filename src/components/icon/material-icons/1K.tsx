import React, { SVGProps } from 'react';

const Svg1K = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M5 19h14V5H5v14zm7-10h1.5v2.25L15.25 9H17l-2.25 3L17 15h-1.75l-1.75-2.25V15H12V9zM7 9h3v6H8.5v-4.5H7V9z'
				opacity={0.3}
			/>
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
			<path d='M8.5 15H10V9H7v1.5h1.5zM13.5 12.75L15.25 15H17l-2.25-3L17 9h-1.75l-1.75 2.25V9H12v6h1.5z' />
		</svg>
	);
};

export default Svg1K;
