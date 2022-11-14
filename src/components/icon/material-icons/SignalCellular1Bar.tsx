import React, { SVGProps } from 'react';

const SvgSignalCellular1Bar = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path d='M2 22h20V2L2 22z' fillOpacity={0.3} />
			<path d='M12 12L2 22h10V12z' />
		</svg>
	);
};

export default SvgSignalCellular1Bar;
