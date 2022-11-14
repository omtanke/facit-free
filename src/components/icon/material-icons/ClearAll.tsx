import React, { SVGProps } from 'react';

const SvgClearAll = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M5 11h14v2H5zm-2 4h14v2H3zm4-8h14v2H7z' />
		</svg>
	);
};

export default SvgClearAll;
