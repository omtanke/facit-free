import { TMaterialIcons } from './icon/material-icons';
import { TSvgIcons } from './icon/svg-icons';

export type TIcons = TMaterialIcons | TSvgIcons | string;

export type TIconsSize =
	| null
	| 'sm'
	| 'md'
	| 'lg'
	| '2x'
	| '3x'
	| '4x'
	| '5x'
	| '6x'
	| '7x'
	| '8x'
	| '9x'
	| '10x';
