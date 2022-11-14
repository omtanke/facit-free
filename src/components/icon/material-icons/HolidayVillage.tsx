import React, { SVGProps } from 'react';

const SvgHolidayVillage = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' fill='currentColor' className='svg-icon' {...props}>
			<path fill='none' d='M0 0h24v24H0z' />
			<path d='M8 6.83l-4 4V18h3v-3h2v3h3v-7.17l-4-4zM9 13H7v-2h2v2z' opacity={0.3} />
			<path d='M8 4l-6 6v10h12V10L8 4zm4 14H9v-3H7v3H4v-7.17l4-4 4 4V18zm-3-5H7v-2h2v2zm9 7V8.35L13.65 4h-2.83L16 9.18V20h2zm4 0V6.69L19.31 4h-2.83L20 7.52V20h2z' />
		</svg>
	);
};

export default SvgHolidayVillage;
