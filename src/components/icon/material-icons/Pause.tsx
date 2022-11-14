import React, { SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M6 5h4v14H6zm8 0h4v14h-4z' />
		</svg>
	);
};

export default SvgPause;
