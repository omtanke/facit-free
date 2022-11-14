import React from 'react';
import { useTour } from '@reactour/tour';
import { createUseStyles } from 'react-jss';
import SusyDarkMode from './assets/img/wanna/susy/susy-dark-mode.png';
import Susy2 from './assets/img/wanna/susy/susy2.png';
import Button from './components/bootstrap/Button';

/**
 * Steps style
 */
export const styles = {
	/**
	 * Overlay style
	 * @param base
	 */
	maskWrapper: (base: any) => ({ ...base }),
	maskArea: (base: any) => ({
		...base,
		rx: 'var(--bs-border-radius)',
	}),
	highlightedArea: (base: any) => ({ ...base }),
	badge: (base: any) => ({ ...base }),
	popover: (base: any) => ({
		...base,
		boxShadow: '0 0 3em rgba(0, 0, 0, 0.5)',
		backgroundColor: 'var(--bs-body-bg)',
		color: 'var(--bs-body-color)',
		borderRadius: 'var(--bs-border-radius)',
	}),
};

/**
 * Image Styles
 * @type {(data?: {theme?: DefaultTheme}) => Classes<"image">}
 */
const useStyles = createUseStyles({
	image: {
		maxHeight: '150px',
		objectFit: 'contain',
	},
});

/**
 * Prev & Next buttons
 * @returns {JSX.Element}
 * @constructor
 */
const TourNavigation = () => {
	const { currentStep, setCurrentStep } = useTour();
	return (
		<div className='col-12 mt-3'>
			<div className='row'>
				<div className='col'>
					{!!currentStep && (
						<Button
							icon='ArrowBackIos'
							color='info'
							isLink
							onClick={() => setCurrentStep(currentStep - 1)}>
							Prev
						</Button>
					)}
				</div>
				<div className='col-auto'>
					<Button
						icon='ArrowForwardIos'
						color='info'
						isLight
						onClick={() => setCurrentStep(currentStep + 1)}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

/**
 * Selector
 * @param name
 * @returns {`[data-tour='${string}']`}
 */
const getTargetName = (name: string): `[data-tour='${string}']` => {
	return `[data-tour='${name}']`;
};

const DarkModeTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-5'>
				<img src={SusyDarkMode} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-7 d-flex align-items-center'>
				<div>
					<p className='lead'>Dark / Light Mode</p>
					<p>You can switch between dark and light mode.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const LangSwitcherTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy2} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Language Switcher</p>
					<p>
						"react-i18next" is integrated for internationalization. Currently in demo,
						it is prepared only for <code>Aside</code>, you can easily use it in your
						project.
					</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

/**
 * Tour Steps
 */
const steps = [
	/**
	 * Dark Mode
	 * @step 0
	 */
	{
		selector: getTargetName('dark-mode'),
		content: () => <DarkModeTour />,
	},
	/**
	 * Lang Selector
	 * @step 1
	 */
	{
		selector: getTargetName('lang-selector'),
		content: () => <LangSwitcherTour />,
		highlightedSelectors: [getTargetName('lang-selector-menu')],
		mutationObservables: [getTargetName('lang-selector-menu')],
		resizeObservables: [getTargetName('lang-selector-menu')],
	},
];

export default steps;
