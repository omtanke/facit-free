import React, { SVGProps } from 'react';

const SvgEqualizer = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M16 9h4v11h-4zm-6-5h4v16h-4zm-6 8h4v8H4z' />
		</svg>
	);
};

export default SvgEqualizer;
