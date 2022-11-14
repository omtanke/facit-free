import React, { SVGProps } from 'react';

const SvgCameraOutdoor = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L18 14v-1zM12 3L4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9l-8-6z' />
		</svg>
	);
};

export default SvgCameraOutdoor;
