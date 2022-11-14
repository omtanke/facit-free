import React, { forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import Portal from '../../../layout/Portal/Portal';
import Validation from './Validation';
import { TInputTypes } from '../../../type/input-type';

export interface IInputProps extends HTMLAttributes<HTMLInputElement>, Partial<InputMask> {
	component?: 'NumberFormat' | 'InputMask';
	type?: TInputTypes;
	id?: string;
	name?: string;
	size?: 'lg' | 'sm' | null;
	className?: string;
	required?: boolean;
	placeholder?: string;
	title?: string;
	list?: string[];
	autoComplete?: string;
	disabled?: boolean;
	multiple?: boolean;
	readOnly?: boolean | 'plaintext';
	ariaDescribedby?: string;
	ariaLabelledby?: string;
	ariaLabel?: string;
	value?: string | number | readonly string[] | undefined;
	min?: number;
	max?: number;
	step?: number;
	isTouched?: boolean;
	isValid?: boolean;
	invalidFeedback?: string;
	validFeedback?: string;
	isValidMessage?: boolean;
	isTooltipFeedback?: boolean;
	onBlur?(...args: unknown[]): unknown;
	onChange?(...args: unknown[]): unknown;
	onFocus?(...args: unknown[]): unknown;
	onInput?(...args: unknown[]): unknown;
	onInvalid?(...args: unknown[]): unknown;
	onSelect?(...args: unknown[]): unknown;
	/**
	 * Mask string. Format characters are:
	 * * `9`: `0-9`
	 * * `a`: `A-Z, a-z`
	 * * `\*`: `A-Z, a-z, 0-9`
	 *
	 * Any character can be escaped with backslash, which usually will appear as double backslash in JS strings.
	 * For example, German phone mask with unremoveable prefix +49 will look like `mask="+4\\9 99 999 99"` or `mask={"+4\\\\9 99 999 99"}`
	 */
	mask?: string;
	format?: string;
	/**
	 * Character to cover unfilled parts of the mask. Default character is "_". If set to null or empty string, unfilled parts will be empty as in ordinary input.
	 */
	maskChar?: string;
	/**
	 * Defines format characters with characters as a keys and corresponding RegExp strings as a values.
	 */
	formatChars?: object;
	accept?: string;
}
const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{
			type,
			id,
			name,
			className,
			required,
			placeholder,
			autoComplete,
			ariaDescribedby,
			ariaLabelledby,
			ariaLabel,
			list,
			title,
			size,
			disabled,
			readOnly,
			multiple,
			value,
			min,
			max,
			step,
			isValid,
			isTouched,
			invalidFeedback,
			validFeedback,
			isValidMessage,
			isTooltipFeedback,
			onBlur,
			onChange,
			onFocus,
			onInput,
			onInvalid,
			onSelect,
			component,
			// InputMask & NumberFormat props
			mask,
			// NumberFormat props
			format,
			...props
		},
		ref,
	) => {
		const PROPS = {
			id,
			name: name === null ? id : name,
			type: !list ? type : undefined,
			className: classNames(
				{
					'form-control': readOnly !== 'plaintext' && type !== 'range',
					'form-range': type === 'range',
					'form-control-plaintext': readOnly === 'plaintext',
					'form-control-color': type === 'color',
					[`form-control-${size}`]: size,
					'is-invalid': !isValid && isTouched && invalidFeedback,
					'is-valid': !isValid && isTouched && !invalidFeedback,
				},
				className,
			),
			required,
			placeholder,
			title,
			list: list ? `${id}-list` : undefined,
			disabled,
			readOnly: !!readOnly,
			multiple,
			autoComplete,
			'aria-describedby': ariaDescribedby,
			'aria-label': ariaLabel,
			'aria-labelledby': ariaLabelledby,
			value: typeof value === 'undefined' && type !== 'file' ? '' : value,
			min,
			max,
			step,
			onBlur,
			onChange: readOnly ? undefined : onChange,
			onFocus,
			onInput,
			onInvalid,
			onSelect,
			...props,
		};
		const NUMBER_FORMAT_PROPS = {
			mask,
			format,
			onBlur: () => onBlur,
			onChange: readOnly ? null : () => onChange,
			onFocus: () => onFocus,
			onInput: () => onInput,
			onInvalid: () => onInvalid,
			onSelect: () => onSelect,
		};
		const MASK_PROPS = { mask };

		const LIST = list && (
			<Portal>
				<datalist id={`${id}-list`}>
					{list.map((option) => (
						<option key={option} aria-labelledby={option} value={option} />
					))}
				</datalist>
			</Portal>
		);

		const VALIDATION = isValidMessage && (
			<Validation
				isTouched={isTouched}
				invalidFeedback={invalidFeedback}
				validFeedback={validFeedback}
				isTooltip={isTooltipFeedback}
			/>
		);

		if (component === 'NumberFormat' || format) {
			return (
				<>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */} {/* @ts-ignore */}
					<NumericFormat ref={ref} {...PROPS} {...NUMBER_FORMAT_PROPS} />
					{LIST}
					{VALIDATION}
				</>
			);
		}
		if (component === 'InputMask' || mask) {
			return (
				<>
					{/* eslint-disable-next-line react/jsx-props-no-spreading */} {/* @ts-ignore */}
					<InputMask ref={ref} {...PROPS} {...MASK_PROPS} />
					{LIST}
					{VALIDATION}
				</>
			);
		}
		return (
			<>
				{/* eslint-disable-next-line react/jsx-props-no-spreading */}
				<input ref={ref} {...PROPS} />
				{LIST}
				{VALIDATION}
			</>
		);
	},
);
Input.displayName = 'Input';
Input.propTypes = {
	component: PropTypes.oneOf(['NumberFormat', 'InputMask']),
	type: PropTypes.oneOf([
		'text',
		'email',
		'password',
		'file',
		'color',
		'date',
		'datetime-local',
		'hidden',
		'month',
		'number',
		'range',
		'search',
		'tel',
		'time',
		'url',
		'week',
	]),
	id: PropTypes.string,
	/**
	 * If the name value is left blank, the id value is assigned.
	 */
	name: PropTypes.string,
	size: PropTypes.oneOf(['lg', 'sm']),
	className: PropTypes.string,
	required: PropTypes.bool,
	placeholder: PropTypes.string,
	/**
	 * The *title* global attribute contains text representing advisory information related to the element it belongs to.
	 */
	title: PropTypes.string,
	/**
	 * Contains pre-defined options for an *Input* component.
	 */
	// @ts-ignore
	list: PropTypes.arrayOf(PropTypes.string),
	autoComplete: PropTypes.string,
	/**
	 * A *disabled* element isn't editable and isn't sent on submit.
	 */
	disabled: PropTypes.bool,
	/**
	 * The multiple attribute works with the following input types: email, and file.
	 */
	multiple: PropTypes.bool,
	/**
	 * A *readOnly* element is just not editable, but gets sent when the according *form* submits.
	 */
	// @ts-ignore
	readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['plaintext'])]),
	ariaDescribedby: PropTypes.string,
	ariaLabelledby: PropTypes.string,
	ariaLabel: PropTypes.string,
	/**
	 * For formik ***`formik.values.ID_OR_NAME`***
	 */
	// @ts-ignore
	// eslint-disable-next-line react/require-default-props
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.arrayOf(PropTypes.string),
	]),
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	/**
	 * For formik ***`formik.touched.ID_OR_NAME`***
	 */
	isTouched: PropTypes.bool,
	/**
	 * For formik ***`formik.isValid`***
	 */
	isValid: PropTypes.bool,
	/**
	 * For formik ***`formik.errors.ID_OR_NAME`***
	 */
	invalidFeedback: PropTypes.string,
	validFeedback: PropTypes.string,
	isValidMessage: PropTypes.bool,
	isTooltipFeedback: PropTypes.bool,
	/**
	 * Fires the moment that the element loses focus. For formik ***`formik.handleBlur`***
	 */
	onBlur: PropTypes.func,
	/**
	 * Fires the moment when the value of the element is changed. For formik ***`formik.handleChange`***
	 */
	onChange: PropTypes.func,
	/**
	 * Fires the moment when the element gets focus
	 */
	onFocus: PropTypes.func,
	/**
	 * Script to be run when an element gets user input
	 */
	onInput: PropTypes.func,
	/**
	 * Script to be run when an element is invalid
	 */
	onInvalid: PropTypes.func,
	/**
	 * Fires after some text has been selected in an element
	 */
	onSelect: PropTypes.func,
	/**
	 * More information, [react-input-mask](https://github.com/sanniassin/react-input-mask#react-input-mask).
	 */
	mask: PropTypes.string,
	/**
	 * More information, [react-number-format](https://github.com/s-yadav/react-number-format#readme).
	 */
	format: PropTypes.string,
};
Input.defaultProps = {
	component: undefined,
	type: 'text',
	id: undefined,
	name: undefined,
	size: null,
	className: undefined,
	required: false,
	placeholder: undefined,
	title: undefined,
	list: undefined,
	autoComplete: undefined,
	disabled: false,
	multiple: false,
	readOnly: false,
	ariaDescribedby: undefined,
	ariaLabelledby: undefined,
	ariaLabel: undefined,
	value: undefined,
	min: undefined,
	max: undefined,
	step: undefined,
	isTouched: false,
	isValid: false,
	invalidFeedback: undefined,
	validFeedback: undefined,
	isValidMessage: true,
	isTooltipFeedback: false,
	onBlur: undefined,
	onChange: undefined,
	onFocus: undefined,
	onInput: undefined,
	onInvalid: undefined,
	onSelect: undefined,
	mask: undefined,
	format: undefined,
};

export default Input;
