import React, { SVGProps } from 'react';

const SvgRoomService = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M12 9.58c-2.95 0-5.47 1.83-6.5 4.41h13A7.002 7.002 0 0012 9.58z'
				opacity={0.3}
			/>
			<path d='M2 17h20v2H2zm11.84-9.21A2.006 2.006 0 0012 5a2.006 2.006 0 00-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18c-.27-4.07-3.25-7.4-7.16-8.21zM12 9.58c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0112 9.58z' />
		</svg>
	);
};

export default SvgRoomService;
