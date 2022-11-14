import React, {
	Children,
	cloneElement,
	FC,
	JSXElementConstructor,
	ReactElement,
	ReactNode,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import TagWrapper from '../TagWrapper';
import Icon from '../icon/Icon';

interface IBreadcrumbItemProps extends Record<string, any> {
	children: ReactNode;
	ariaLabel?: string;
	className?: string;
	tag?: string;
	to: string;
	isActive?: boolean;
	divider?: ReactElement<any, string | JSXElementConstructor<any>> | string;
}
export const BreadcrumbItem: FC<IBreadcrumbItemProps> = ({
	children,
	ariaLabel,
	className,
	tag,
	to,
	isActive,
	divider,
}) => {
	return (
		<TagWrapper
			tag={tag}
			className={classNames('breadcrumb-item', { active: isActive }, className)}
			aria-current={isActive ? 'page' : null}
			aria-label={ariaLabel || children}>
			{divider &&
				typeof divider !== 'string' &&
				cloneElement(divider, {
					className: classNames('breadcrumb-icon', divider.props.className),
				})}
			{isActive ? (
				children
			) : (
				<NavLink to={to} aria-label={ariaLabel}>
					{children}
				</NavLink>
			)}
		</TagWrapper>
	);
};
BreadcrumbItem.propTypes = {
	children: PropTypes.node.isRequired,
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	tag: PropTypes.string,
	to: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
	// @ts-ignore
	divider: PropTypes.node,
};
BreadcrumbItem.defaultProps = {
	className: undefined,
	ariaLabel: undefined,
	tag: 'li',
	isActive: false,
	divider: undefined,
};

interface IBreadcrumbProps extends Record<string, any> {
	children?: ReactElement<IBreadcrumbItemProps> | ReactElement<IBreadcrumbItemProps>[];
	list?: {
		title: string;
		to: string;
		tag?: 'div' | 'li';
	}[];
	tag?: 'nav' | 'div' | 'section';
	listTag?: 'div' | 'ol' | 'ul';
	itemTag?: 'div' | 'li';
	ariaLabel?: string | null;
	autoActive?: boolean;
	isToHome?: ReactNode;
	divider?: ReactElement<any, string | JSXElementConstructor<any>> | string;
}
const Breadcrumb: FC<IBreadcrumbProps> = ({
	children,
	list,
	tag,
	listTag,
	itemTag,
	ariaLabel,
	autoActive,
	isToHome,
	divider,
}) => {
	const DIVIDER = divider !== 'string' && divider;
	return (
		<TagWrapper
			tag={tag}
			aria-label={ariaLabel}
			style={
				divider
					? {
							'--bs-breadcrumb-divider':
								typeof divider === 'string' ? `'${divider}'` : 'none',
					  }
					: null
			}>
			<TagWrapper tag={listTag} className='breadcrumb'>
				{isToHome && (
					<BreadcrumbItem to='/' ariaLabel='Home'>
						{isToHome}
					</BreadcrumbItem>
				)}
				{list
					? list.map((item, index) => (
							<BreadcrumbItem
								key={item.title}
								tag={item.tag || itemTag}
								to={item.to}
								isActive={autoActive && list.length === index + 1}
								divider={DIVIDER as ReactElement}>
								{item.title}
							</BreadcrumbItem>
					  ))
					: Children.map(children, (child, index) =>
							// @ts-ignore
							cloneElement(child, {
								// @ts-ignore
								tag: child.props.tag || itemTag,
								// @ts-ignore
								isActive: autoActive && children.length === index + 1,
								// @ts-ignore
								divider: child.props.divider || DIVIDER,
							}),
					  )}
			</TagWrapper>
		</TagWrapper>
	);
};
Breadcrumb.propTypes = {
	// @ts-ignore
	children: PropTypes.node,
	tag: PropTypes.oneOf(['nav', 'div', 'section']),
	listTag: PropTypes.oneOf(['div', 'ol', 'ul']),
	itemTag: PropTypes.oneOf(['div', 'li']),
	ariaLabel: PropTypes.string,
	// @ts-ignore
	list: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired,
		}),
	),
	/**
	 * The last element is automatically activated
	 */
	autoActive: PropTypes.bool,
	/**
	 * Icon component or string
	 */
	isToHome: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	/**
	 * Icon component or string
	 */
	// @ts-ignore
	divider: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
Breadcrumb.defaultProps = {
	children: undefined,
	tag: 'nav',
	listTag: 'ol',
	itemTag: 'li',
	ariaLabel: 'breadcrumb',
	list: undefined,
	autoActive: true,
	isToHome: <Icon icon='HolidayVillage' />,
	divider: <Icon icon='ChevronRight' />,
};

export default Breadcrumb;
