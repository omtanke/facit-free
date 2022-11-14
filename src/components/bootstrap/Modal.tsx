import React, {
	forwardRef,
	FC,
	ReactNode,
	useLayoutEffect,
	useRef,
	ReactElement,
	HTMLAttributes,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import Portal from '../../layout/Portal/Portal';
import TagWrapper from '../TagWrapper';
import useEventListener from '../../hooks/useEventListener';
import { TModalFullScreen, TModalSize } from '../../type/modal-type';

interface IModalTitleProps extends HTMLAttributes<HTMLElement> {
	id: string;
	children: ReactNode;
	className?: string;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
}
export const ModalTitle = forwardRef<HTMLHeadingElement, IModalTitleProps>(
	({ tag, id, children, className, ...props }, ref) => {
		return (
			<TagWrapper
				tag={tag}
				ref={ref}
				id={id}
				className={classNames('modal-title', className)}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</TagWrapper>
		);
	},
);
ModalTitle.displayName = 'ModalTitle';
ModalTitle.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'span']),
};
ModalTitle.defaultProps = {
	className: undefined,
	tag: 'h5',
};

interface IModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactElement<IModalTitleProps> | ReactNode;
	className?: string;
	setIsOpen?(...args: unknown[]): unknown | undefined;
}
export const ModalHeader = forwardRef<HTMLDivElement, IModalHeaderProps>(
	({ children, className, setIsOpen, ...props }, ref) => {
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<div ref={ref} className={classNames('modal-header', className)} {...props}>
				{children}
				{setIsOpen && (
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='modal'
						aria-label='Close'
						onClick={() => setIsOpen(false)}
					/>
				)}
			</div>
		);
	},
);
ModalHeader.displayName = 'ModalHeader';
ModalHeader.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	/**
	 * Show and hide the close button at the top right.
	 */
	setIsOpen: PropTypes.func,
};
ModalHeader.defaultProps = {
	className: undefined,
	setIsOpen: undefined,
};

interface IModalBodyProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const ModalBody = forwardRef<HTMLDivElement, IModalBodyProps>(
	({ children, className, ...props }, ref) => {
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<div ref={ref} className={classNames('modal-body', className)} {...props}>
				{children}
			</div>
		);
	},
);
ModalBody.displayName = 'ModalBody';
ModalBody.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
ModalBody.defaultProps = {
	className: undefined,
};

interface IModalFooterProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
	className?: string;
}
export const ModalFooter = forwardRef<HTMLDivElement, IModalFooterProps>(
	({ children, className, ...props }, ref) => {
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<div ref={ref} className={classNames('modal-footer', className)} {...props}>
				{children}
			</div>
		);
	},
);
ModalFooter.displayName = 'ModalFooter';
ModalFooter.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
ModalFooter.defaultProps = {
	className: undefined,
};

interface IModalProps extends Record<string, any> {
	children:
		| ReactElement<IModalHeaderProps>[]
		| ReactElement<IModalBodyProps>[]
		| ReactElement<IModalFooterProps>[];
	isOpen: boolean;
	setIsOpen(...args: unknown[]): unknown;
	id?: string | undefined;
	titleId?: string;
	isStaticBackdrop?: boolean;
	isScrollable?: boolean;
	isCentered?: boolean;
	size?: TModalSize;
	fullScreen?: TModalFullScreen;
	isAnimation?: boolean;
}
const Modal: FC<IModalProps> = ({
	children,
	isOpen,
	setIsOpen,
	id,
	titleId,
	isStaticBackdrop,
	isScrollable,
	isCentered,
	size,
	fullScreen,
	isAnimation,
	...props
}) => {
	const refModal = useRef(null);
	const ref = useRef(null);

	// <body> modal-open class (presentation)
	useLayoutEffect(() => {
		if (isOpen) {
			document.body.classList.add('modal-open');
		}
		return () => {
			document.body.classList.remove('modal-open');
		};
	});

	// Backdrop close function
	const closeModal = (event: { target: any }) => {
		// @ts-ignore
		if (ref.current && !ref.current.contains(event.target) && !isStaticBackdrop) {
			setIsOpen(false);
		}
	};
	useEventListener('mousedown', closeModal);
	useEventListener('touchstart', closeModal); // Touchscreen

	// Backdrop static function
	const modalStatic = (event: { target: any }) => {
		// @ts-ignore
		if (ref.current && !ref.current.contains(event.target) && isStaticBackdrop) {
			// @ts-ignore
			refModal.current.classList.add('modal-static');
			// @ts-ignore
			setTimeout(() => refModal.current.classList.remove('modal-static'), 300);
		}
	};
	useEventListener('mousedown', modalStatic);
	useEventListener('touchstart', modalStatic); // Touchscreen

	// Keypress close function
	const escFunction = (event: { key: string }) => {
		if (event.key === 'Escape') {
			setIsOpen(false);
		}
	};
	useEventListener('keydown', escFunction);

	const ANIMATION_PROPS = isAnimation
		? {
				initial: { opacity: 0, y: '-50%' },
				animate: { opacity: 1, x: '0%', y: '0%' },
				exit: { opacity: 0, y: '-50%' },
				transition: { ease: 'easeInOut', duration: 0.3 },
		  }
		: null;

	return (
		<Portal>
			<AnimatePresence exitBeforeEnter>
				{isOpen && (
					<>
						<motion.div
							ref={refModal}
							key='modal'
							className={classNames('modal', { fade: isAnimation }, 'show')}
							role='dialog'
							style={{ display: 'block' }}
							id={id}
							tabIndex={-1}
							aria-labelledby={titleId}
							aria-hidden='true'
							data-bs-backdrop={isStaticBackdrop ? 'static' : null}
							data-bs-keyboard={isStaticBackdrop ? 'false' : null}
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...ANIMATION_PROPS}
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...props}>
							<div
								ref={ref}
								className={classNames('modal-dialog', {
									'modal-dialog-scrollable': isScrollable,
									'modal-dialog-centered': isCentered,
									[`modal-${size}`]: size,
									[`modal-fullscreen${
										typeof fullScreen === 'string' ? `-${fullScreen}-down` : ''
									}`]: fullScreen,
								})}>
								<div className='modal-content'>{children}</div>
							</div>
						</motion.div>
						<div
							className={classNames('modal-backdrop', { fade: isAnimation }, 'show')}
						/>
					</>
				)}
			</AnimatePresence>
		</Portal>
	);
};
Modal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
	/**
	 * ModalHeader, ModalBody and ModalFooter
	 */
	// @ts-ignore
	children: PropTypes.node.isRequired,
	id: PropTypes.string,
	/**
	 * For Accessibility
	 */
	titleId: PropTypes.string,
	/**
	 * When backdrop is set to static, the modal will not close when clicking outside it.
	 */
	isStaticBackdrop: PropTypes.bool,
	/**
	 * When modals become too long for the user’s viewport or device, they scroll independent of the page itself.
	 */
	isScrollable: PropTypes.bool,
	/**
	 * vertically center the modal
	 */
	isCentered: PropTypes.bool,
	/**
	 *  These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.
	 */
	size: PropTypes.oneOf([null, 'sm', 'lg', 'xl']),
	/**
	 * Another override is the option to pop up a modal that covers the user viewport.
	 */
	// @ts-ignore
	fullScreen: PropTypes.oneOfType([
		PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
		PropTypes.bool,
	]),
	isAnimation: PropTypes.bool,
};
Modal.defaultProps = {
	id: undefined,
	isStaticBackdrop: false,
	isScrollable: false,
	isCentered: false,
	size: null,
	fullScreen: false,
	isAnimation: true,
	titleId: undefined,
};

export default Modal;
