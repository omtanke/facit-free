import React, { SVGProps } from 'react';

const SvgCallMade = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5.41 20L17 8.41V15h2V5H9v2h6.59L4 18.59z' />
		</svg>
	);
};

export default SvgCallMade;
