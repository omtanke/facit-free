import React, { SVGProps } from 'react';

const SvgQueueMusic = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<circle cx={16} cy={17} opacity={0.3} r={1} />
			<path d='M3 10h12v2H3v-2zm0 4h8v2H3v-2zm0-8h12v2H3V6zm14 8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5v8.18z' />
		</svg>
	);
};

export default SvgQueueMusic;
