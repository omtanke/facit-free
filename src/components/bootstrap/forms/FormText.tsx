import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface IFormTextProps {
	id?: string;
	className?: string;
	children: ReactNode;
}
const FormText: FC<IFormTextProps> = ({ id, className, children, ...props }) => {
	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<div id={id} className={classNames('form-text', className)} {...props}>
			{children}
		</div>
	);
};
FormText.propTypes = {
	/**
	 * Form text should be explicitly associated with the form control it relates to using the *ariaDescribedby(aria-describedby)* attribute.
	 */
	id: PropTypes.string,
	/**
	 * Has a default *form-text* class. Your entries will also be added to this.
	 */
	className: PropTypes.string,
	/**
	 * Here you can use string, component or html element
	 */
	children: PropTypes.node.isRequired,
};
FormText.defaultProps = {
	id: undefined,
	className: undefined,
};

export default FormText;
