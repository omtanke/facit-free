import React, { SVGProps } from 'react';

const SvgWysiwyg = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M19 19H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z' opacity={0.3} />
			<path d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H5V7h14v12zm-2-7H7v-2h10v2zm-4 4H7v-2h6v2z' />
		</svg>
	);
};

export default SvgWysiwyg;
