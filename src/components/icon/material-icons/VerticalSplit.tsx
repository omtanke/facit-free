import React, { SVGProps } from 'react';

const SvgVerticalSplit = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M15 7h4v10h-4z' opacity={0.3} />
			<path d='M3 13h8v2H3zm0 4h8v2H3zm0-8h8v2H3zm0-4h8v2H3zm10 0v14h8V5h-8zm6 12h-4V7h4v10z' />
		</svg>
	);
};

export default SvgVerticalSplit;
