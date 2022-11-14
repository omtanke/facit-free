import React, { SVGProps } from 'react';

const SvgCustomFrance = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 512 512'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='svg-icon'
		{...props}>
		<mask
			id='custom-france_svg__a'
			style={{
				maskType: 'alpha',
			}}
			maskUnits='userSpaceOnUse'
			x={0}
			y={0}
			width={512}
			height={512}>
			<path
				d='M400 0H112C50.144 0 0 50.144 0 112v288c0 61.856 50.144 112 112 112h288c61.856 0 112-50.144 112-112V112C512 50.144 461.856 0 400 0Z'
				fill='#036738'
			/>
		</mask>
		<g mask='url(#custom-france_svg__a)'>
			<path
				d='M38.42 0C17.2 0 0 26.202 0 58.526v394.948C0 485.796 17.2 512 38.42 512H171V0H38.42Z'
				fill='#41479B'
			/>
			<path d='M341 0H171v512h170V0Z' fill='#F5F5F5' />
			<path
				d='M473.58 0H341v512h132.58c21.219 0 38.42-26.202 38.42-58.527V58.527C512 26.202 494.8 0 473.58 0Z'
				fill='#FF4B55'
			/>
		</g>
	</svg>
);

export default SvgCustomFrance;
