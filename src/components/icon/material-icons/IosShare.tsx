import React, { SVGProps } from 'react';

const SvgIosShare = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M18 8h-3v2h3v11H6V10h3V8H6c-1.11 0-2 .89-2 2v11a2 2 0 002 2h12c1.1 0 2-.9 2-2V10a2 2 0 00-2-2z' />
			<path d='M11 16h2V5h3l-4-4-4 4h3z' />
		</svg>
	);
};

export default SvgIosShare;
