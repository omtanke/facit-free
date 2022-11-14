import React, { cloneElement, FC, ReactNode, useState } from 'react';
import { usePopper } from 'react-popper';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Portal from '../../layout/Portal/Portal';

interface ITooltipsProps {
	children: ReactNode;
	title: ReactNode;
	placement?: 'auto' | 'top' | 'bottom' | 'right' | 'left';
	flip?: ('auto' | 'top' | 'bottom' | 'right' | 'left')[];
	delay?: number;
	isDisplayInline?: boolean;
	className?: string;
	modifiers?: object;
	isDisableElements?: boolean;
}
const Tooltips: FC<ITooltipsProps> = ({
	children,
	className,
	title,
	placement,
	flip,
	delay,
	isDisplayInline,
	isDisableElements,
	modifiers,
}) => {
	const [referenceElement, setReferenceElement] = useState(null);
	const [popperElement, setPopperElement] = useState(null);
	const [arrowElement, setArrowElement] = useState(null);
	const { styles, attributes } = usePopper(referenceElement, popperElement, {
		placement,
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, -3],
				},
			},
			{
				name: 'flip',
				enabled: true,
				options: {
					// @ts-ignore
					fallbackPlacements: flip,
				},
			},
			{
				name: 'arrow',
				options: {
					element: arrowElement,
				},
			},
			{ ...modifiers },
		],
	});

	const [tooltipOpen, setTooltipOpen] = useState(false);

	const ON_MOUSE_OVER = () => {
		setTooltipOpen(true);
		// @ts-ignore
		if (children?.props?.onMouseOver) children.props.onMouseOver();
	};

	const ON_MOUSE_LEAVE = () => {
		setTimeout(() => setTooltipOpen(false), delay);
		// @ts-ignore
		if (children?.props?.onMouseLeave) children.props.onMouseLeave();
	};

	const PROPS = {
		className: classNames(
			{ 'd-inline-block': isDisplayInline, 'tooltip-string': typeof children === 'string' },
			// @ts-ignore
			children?.props?.className,
		),
		onMouseOver: ON_MOUSE_OVER,
		onMouseLeave: ON_MOUSE_LEAVE,
	};

	return (
		<>
			{cloneElement(
				// @ts-ignore
				typeof children === 'string' ? (
					// @ts-ignore
					// eslint-disable-next-line react/jsx-props-no-spreading
					<span ref={setReferenceElement} {...PROPS}>
						{children}
					</span>
				) : (
					(isDisableElements && (
						// eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
						<span className='d-inline-block' tabIndex={0}>
							{children}
						</span>
					)) ||
						children
				),
				{
					ref: setReferenceElement,
					...PROPS,
				},
			)}
			{tooltipOpen && (
				<Portal>
					<div
						// @ts-ignore
						ref={setPopperElement}
						role='tooltip'
						className={classNames('tooltip bs-tooltip-auto show', className)}
						style={styles.popper}
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...attributes.popper}>
						{/* @ts-ignore */}
						<div ref={setArrowElement} className='tooltip-arrow' style={styles.arrow} />
						<div className='tooltip-inner'>{title}</div>
					</div>
				</Portal>
			)}
		</>
	);
};

Tooltips.propTypes = {
	/**
	 * String, HTML or React Component (`<Component {...props} />`)
	 */
	children: PropTypes.node.isRequired,
	/**
	 * String, HTML or React Component
	 */
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	/**
	 * Position of tooltips
	 */
	placement: PropTypes.oneOf(['auto', 'top', 'bottom', 'right', 'left']),
	/**
	 * For situations where there is not enough space to place
	 */
	// @ts-ignore
	flip: PropTypes.arrayOf(PropTypes.oneOf(['auto', 'top', 'bottom', 'right', 'left'])),
	/**
	 * The value entered is in milliseconds
	 */
	delay: PropTypes.number,
	/**
	 * Adds style: `display: inline-block;`
	 */
	isDisplayInline: PropTypes.bool,
	className: PropTypes.string,
	/**
	 * More information, [Popper.js](https://popper.js.org/docs/v2/modifiers/)
	 */
	// eslint-disable-next-line react/forbid-prop-types
	modifiers: PropTypes.object,
	isDisableElements: PropTypes.bool,
};
Tooltips.defaultProps = {
	placement: 'top',
	// @ts-ignore
	flip: ['top', 'bottom'],
	delay: 0,
	isDisplayInline: false,
	className: undefined,
	modifiers: {
		name: 'example',
		enabled: false,
		phase: 'read',
		fn: () => {},
	},
	isDisableElements: false,
};

export default Tooltips;
