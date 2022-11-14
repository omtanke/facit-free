import React, { SVGProps } from 'react';

const SvgDetails = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M13 8.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z' opacity={0.3} />
			<path d='M12 3L2 21h20L12 3zm1 5.92L18.6 19H13V8.92zm-2 0V19H5.4L11 8.92z' />
		</svg>
	);
};

export default SvgDetails;
