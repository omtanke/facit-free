import React, { SVGProps } from 'react';

const SvgDriveFileMoveRtl = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M11.17 8l-2-2H4v12h16V8h-8.83zM16 14h-4v3l-4-4 4-4v3h4v2z' opacity={0.3} />
			<path d='M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V6h5.17l2 2H20v10zm-8-1l-4-4 4-4v3h4v2h-4v3z' />
		</svg>
	);
};

export default SvgDriveFileMoveRtl;
