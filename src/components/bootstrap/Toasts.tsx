import React, { Children, cloneElement, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/Icon';
import { TColor } from '../../type/color-type';
import { TIcons } from '../../type/icons-type';

interface IToastHeaderProps {
	icon?: TIcons;
	iconColor?: TColor;
	title: ReactNode;
	time?: string | null;
	isDismiss?: boolean;
}
const ToastHeader: FC<IToastHeaderProps> = ({
	icon,
	iconColor,
	title,
	time,
	isDismiss,
	...props
}) => {
	// @ts-ignore
	// eslint-disable-next-line react/prop-types
	const { onDismiss } = props;
	return (
		<div className='toast-header'>
			{icon && <Icon icon={icon} size='lg' color={iconColor} className='me-2' />}
			{title && <strong className='me-auto'>{title}</strong>}
			{time && <small>{time}</small>}
			{/* eslint-disable-next-line react/prop-types */}
			{isDismiss && onDismiss}
		</div>
	);
};
ToastHeader.propTypes = {
	icon: PropTypes.string,
	iconColor: PropTypes.oneOf([
		null,
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
	title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	time: PropTypes.string,
	isDismiss: PropTypes.bool,
};
ToastHeader.defaultProps = {
	icon: undefined,
	iconColor: undefined,
	time: null,
	isDismiss: false,
};

interface IToastBodyProps {
	children: ReactNode;
}
const ToastBody: FC<IToastBodyProps> = ({ children }) => {
	return <div className='toast-body'>{children}</div>;
};
ToastBody.propTypes = {
	children: PropTypes.node.isRequired,
};

interface IToastProps {
	children: ReactNode;
	onDismiss(...args: unknown[]): unknown;
}
export const Toast: FC<IToastProps> = ({ children, onDismiss }) => {
	return (
		<div className='toast show' role='alert' aria-live='assertive' aria-atomic='true'>
			{Children.map(children, (child, index) =>
				// @ts-ignore
				cloneElement(child, {
					// eslint-disable-next-line react/no-array-index-key
					key: index,
					onDismiss: (
						<button
							type='button'
							className='btn-close'
							aria-label='Close'
							onClick={onDismiss}
						/>
					),
				}),
			)}
		</div>
	);
};
Toast.propTypes = {
	children: PropTypes.node.isRequired,
	onDismiss: PropTypes.func.isRequired,
};

interface IToastContainerProps {
	children: ReactNode;
}
export const ToastContainer: FC<IToastContainerProps> = ({ children }) => {
	return <div className='toast-container position-fixed top-0 end-0 p-3'>{children}</div>;
};
ToastContainer.propTypes = {
	children: PropTypes.node.isRequired,
};

interface IToastsProps {
	title: ReactNode;
	children: ReactNode;
	icon?: TIcons;
	iconColor?: TColor;
	time?: string | null;
	isDismiss?: boolean;
}
const Toasts: FC<IToastsProps> = ({
	icon,
	iconColor,
	title,
	time,
	isDismiss,
	children,
	...props
}) => {
	// @ts-ignore
	// eslint-disable-next-line react/prop-types
	const { onDismiss } = props;
	return (
		<>
			<ToastHeader
				icon={icon}
				iconColor={iconColor}
				title={title}
				time={time}
				isDismiss={isDismiss}
				// @ts-ignore
				onDismiss={onDismiss}
			/>
			<ToastBody>{children}</ToastBody>
		</>
	);
};
Toasts.propTypes = {
	title: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
	icon: PropTypes.string,
	iconColor: PropTypes.oneOf([
		'primary',
		'secondary',
		'success',
		'info',
		'warning',
		'danger',
		'light',
		'dark',
	]),
	time: PropTypes.string,
	isDismiss: PropTypes.bool,
};
Toasts.defaultProps = {
	icon: undefined,
	iconColor: undefined,
	time: null,
	isDismiss: true,
};

export default Toasts;
