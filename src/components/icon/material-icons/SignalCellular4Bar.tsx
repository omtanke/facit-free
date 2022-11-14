import React, { SVGProps } from 'react';

const SvgSignalCellular4Bar = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M2 22h20V2L2 22z' />
		</svg>
	);
};

export default SvgSignalCellular4Bar;
