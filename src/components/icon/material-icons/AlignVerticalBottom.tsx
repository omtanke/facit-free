import React, { SVGProps } from 'react';

const SvgAlignVerticalBottom = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z' />
		</svg>
	);
};

export default SvgAlignVerticalBottom;
