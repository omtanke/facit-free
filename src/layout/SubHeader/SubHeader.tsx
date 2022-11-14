import React, { FC, ReactNode, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useMeasure } from 'react-use';

interface ISubHeaderLeftProps {
	children: ReactNode;
	className?: string;
}
export const SubHeaderLeft: FC<ISubHeaderLeftProps> = ({ children, className }) => {
	return <div className={classNames('subheader-left', 'col-sm', className)}>{children}</div>;
};
SubHeaderLeft.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
SubHeaderLeft.defaultProps = {
	className: undefined,
};

interface ISubHeaderRightProps {
	children: ReactNode;
	className?: string;
}
export const SubHeaderRight: FC<ISubHeaderRightProps> = ({ children, className }) => {
	return (
		<div className={classNames('subheader-right', 'col-sm-auto', className)}>{children}</div>
	);
};
SubHeaderRight.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
SubHeaderRight.defaultProps = {
	className: undefined,
};

interface ISubheaderSeparatorProps {
	className?: string;
}
export const SubheaderSeparator: FC<ISubheaderSeparatorProps> = ({ className }) => {
	return <div className={classNames('subheader-separator', className)} />;
};
SubheaderSeparator.propTypes = {
	className: PropTypes.string,
};
SubheaderSeparator.defaultProps = {
	className: undefined,
};

export interface ISubHeaderProps {
	children: ReactNode;
	className?: string;
}
const SubHeader: FC<ISubHeaderProps> = ({ children, className }) => {
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	const root = document.documentElement;
	root.style.setProperty('--subheader-height', `${height}px`);

	useLayoutEffect(() => {
		document.body.classList.add('subheader-enabled');
		return () => {
			document.body.classList.remove('subheader-enabled');
		};
	});

	return (
		<div ref={ref} className={classNames('subheader', 'row', className)}>
			{children}
		</div>
	);
};
SubHeader.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
SubHeader.defaultProps = {
	className: undefined,
};

export default SubHeader;
