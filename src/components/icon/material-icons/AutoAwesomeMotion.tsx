import React, { SVGProps } from 'react';

const SvgAutoAwesomeMotion = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path opacity={0.3} d='M12 12h8v8h-8z' />
			<path d='M14 2H4c-1.1 0-2 .9-2 2v10h2V4h10V2zM20 10h-8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 10h-8v-8h8v8z' />
			<path d='M18 6H8c-1.1 0-2 .9-2 2v10h2V8h10V6z' />
		</svg>
	);
};

export default SvgAutoAwesomeMotion;
