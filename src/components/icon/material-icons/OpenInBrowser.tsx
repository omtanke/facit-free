import React, { SVGProps } from 'react';

const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 00-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z' />
		</svg>
	);
};

export default SvgOpenInBrowser;
