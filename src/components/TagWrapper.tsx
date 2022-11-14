import React, { forwardRef, ReactNode, ElementType, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';

interface ITagWrapper extends Record<string, any>, HTMLAttributes<HTMLElement> {
	children: ReactNode;
	tag: ElementType;
}
const TagWrapper = forwardRef<HTMLDivElement | HTMLAnchorElement | HTMLFormElement, ITagWrapper>(
	({ tag: Tag, children, ...props }, ref) => {
		return (
			// eslint-disable-next-line react/jsx-props-no-spreading
			<Tag ref={ref} {...props}>
				{children}
			</Tag>
		);
	},
);
TagWrapper.displayName = 'TagWrapper';
TagWrapper.propTypes = {
	tag: PropTypes.string,
	children: PropTypes.node.isRequired,
};
TagWrapper.defaultProps = {
	tag: 'div',
};

export default TagWrapper;
