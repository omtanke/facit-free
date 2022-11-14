import React, { SVGProps } from 'react';

const SvgFilePresent = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path d='M0 0h24v24H0V0z' fill='none' />
			<path
				d='M14 4H6v16h12V8h-4V4zm2 7v4c0 2.21-1.79 4-4 4s-4-1.79-4-4V9.5a2.5 2.5 0 015 0V15h-2V9.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V15c0 1.1.9 2 2 2s2-.9 2-2v-4h2z'
				opacity={0.3}
			/>
			<path d='M14 15c0 1.1-.9 2-2 2s-2-.9-2-2V9.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2V9.5a2.5 2.5 0 00-5 0V15c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2v4z' />
			<path d='M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h8v4h4v12z' />
		</svg>
	);
};

export default SvgFilePresent;
