import React, { SVGProps } from 'react';

const SvgPhotoCameraFront = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M15.95 7l-1.83-2H9.88L8.05 7H4v12h16V7h-4.05zM12 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 015.56 0A2.01 2.01 0 0116 16.43V17z'
				opacity={0.3}
			/>
			<path d='M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h4.05l1.83-2h4.24l1.83 2H20v12zm-8-6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm2.78 1.58a6.95 6.95 0 00-5.56 0A2.01 2.01 0 008 16.43V17h8v-.57c0-.81-.48-1.53-1.22-1.85z' />
		</svg>
	);
};

export default SvgPhotoCameraFront;
