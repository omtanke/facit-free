import React, { SVGProps } from 'react';

const SvgHorizontalDistribute = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M4 22H2V2h2v20zM22 2h-2v20h2V2zm-8.5 5h-3v10h3V7z' />
		</svg>
	);
};

export default SvgHorizontalDistribute;
