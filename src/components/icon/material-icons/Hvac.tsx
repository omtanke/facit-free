import React, { SVGProps } from 'react';

const SvgHvac = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				d='M5 19h14V5H5v14zm7-13c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z'
				opacity={0.3}
			/>
			<path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z' />
			<path d='M12 18c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0-2c-1.01 0-1.91-.39-2.62-1h5.24c-.71.61-1.61 1-2.62 1zm0-8c1.01 0 1.91.39 2.62 1H9.38c.71-.61 1.61-1 2.62-1zm-3.44 2h6.89c.26.45.44.96.51 1.5h-7.9c.06-.54.23-1.05.5-1.5zm7.39 2.5c-.07.54-.24 1.05-.51 1.5H8.56c-.26-.45-.44-.96-.51-1.5h7.9z' />
		</svg>
	);
};

export default SvgHvac;
