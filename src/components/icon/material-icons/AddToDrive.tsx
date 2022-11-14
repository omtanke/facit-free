import React, { SVGProps } from 'react';

const SvgAddToDrive = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 11c.17 0 .33.01.49.02L15 3H9l5.68 9.84A5.986 5.986 0 0119 11zM8.15 4.52L2 15.5 5 21l6.33-10.97zM13.2 15.5H9.9L6.73 21h7.81A5.93 5.93 0 0113 17c0-.52.07-1.02.2-1.5zM20 16v-3h-2v3h-3v2h3v3h2v-3h3v-2z' />
		</svg>
	);
};

export default SvgAddToDrive;
