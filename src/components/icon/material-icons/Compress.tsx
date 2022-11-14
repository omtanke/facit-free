import React, { SVGProps } from 'react';

const SvgCompress = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M4 9h16v2H4zM16 4h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zM4 12h16v2H4z' />
		</svg>
	);
};

export default SvgCompress;
