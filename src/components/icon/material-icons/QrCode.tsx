import React, { SVGProps } from 'react';

const SvgQrCode = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path fill='none' d='M17 15h2v2h-2zM15 17h2v2h-2z' />
			<path opacity={0.3} d='M5 15h4v4H5zM5 5h4v4H5zM15 5h4v4h-4z' />
			<path d='M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 19h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 13h2v2h-2zM19 15h2v2h-2z' />
		</svg>
	);
};

export default SvgQrCode;
