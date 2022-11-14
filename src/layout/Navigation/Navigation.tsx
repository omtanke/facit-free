import React, { FC, forwardRef, HTMLAttributes, ReactNode, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { TIcons } from '../../type/icons-type';
import Item from './Item';

interface IListProps extends HTMLAttributes<HTMLUListElement> {
	id?: string;
	children?: ReactNode;
	className?: string;
	ariaLabelledby?: string;
	parentId?: string;
	rootId?: string;
	horizontal?: boolean;
}
export const List = forwardRef<HTMLUListElement, IListProps>(
	({ id, children, className, ariaLabelledby, parentId, rootId, horizontal, ...props }, ref) => {
		return (
			<ul
				ref={ref}
				id={id}
				className={classNames('navigation', { 'navigation-menu': horizontal }, className)}
				aria-labelledby={ariaLabelledby}
				data-bs-parent={
					parentId === `${rootId}__${rootId}`
						? `#${rootId}`
						: (parentId && `#${parentId}`) || null
				}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...props}>
				{children}
			</ul>
		);
	},
);
List.displayName = 'List';
List.propTypes = {
	id: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	ariaLabelledby: PropTypes.string,
	parentId: PropTypes.string,
	rootId: PropTypes.string,
	horizontal: PropTypes.bool,
};
List.defaultProps = {
	id: undefined,
	children: null,
	className: undefined,
	ariaLabelledby: undefined,
	parentId: undefined,
	rootId: undefined,
	horizontal: false,
};

interface INavigationLineProps {
	className?: string;
}
export const NavigationLine: FC<INavigationLineProps> = ({ className }) => {
	return <hr className={classNames('navigation-line', className)} />;
};
NavigationLine.propTypes = {
	className: PropTypes.string,
};
NavigationLine.defaultProps = {
	className: undefined,
};

interface INavigationTitleProps extends HTMLAttributes<HTMLSpanElement> {
	className?: string;
	children: ReactNode;
}
export const NavigationTitle: FC<INavigationTitleProps> = ({ className, children, ...props }) => {
	return (
		<li className='navigation-item'>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<span className={classNames('navigation-title', className)} {...props}>
				{children}
			</span>
		</li>
	);
};
NavigationTitle.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
NavigationTitle.defaultProps = {
	className: undefined,
};

interface INavigationProps {
	horizontal?: boolean;
	menu: {
		[key: string]: {
			id?: string | number;
			text?: string;
			path?: string;
			icon?: TIcons;
			isDisable?: boolean;
			subMenu?: {
				[key: string]: {
					id?: string | number;
					text?: string;
					path?: string;
					icon?: TIcons;
					isDisable?: boolean;
				};
			} | null;
		};
	};
	id: string;
	className?: string;
}
const Navigation = forwardRef<HTMLElement, INavigationProps>(
	({ menu, horizontal, id, className, ...props }, ref) => {
		const [activeItem, setActiveItem] = useState(undefined);

		const { t } = useTranslation('menu');

		function fillMenu(
			data:
				| {
						id?: string | number;
						text?: string;
						path?: string;
						icon?: TIcons;
						isDisable?: boolean;
						subMenu?:
							| {
									id?: string | number;
									text?: string;
									path?: string;
									icon?: TIcons;
									isDisable?: boolean;
							  }[]
							| undefined;
				  }[]
				| any,
			parentId: string,
			rootId: string,
			isHorizontal: boolean | undefined,
			isMore: boolean | undefined,
		) {
			return Object.keys(data).map((item) =>
				data[item].path ? (
					<Item
						key={data[item].id}
						rootId={rootId}
						id={data[item].id}
						title={data[item].text}
						icon={data[item].icon}
						to={`${data[item].path}`}
						parentId={parentId}
						isHorizontal={isHorizontal}
						setActiveItem={setActiveItem}
						activeItem={activeItem}
						notification={data[item].notification}
						hide={data[item].hide}>
						{!!data[item].subMenu &&
							fillMenu(
								data[item].subMenu,
								data[item].id,
								rootId,
								isHorizontal,
								undefined,
							)}
					</Item>
				) : (
					!isMore &&
					!isHorizontal && (
						<NavigationTitle key={data[item].id}>
							{t(data[item].text) as ReactNode}
						</NavigationTitle>
					)
				),
			);
		}

		return (
			// @ts-ignore
			// eslint-disable-next-line react/jsx-props-no-spreading
			<nav ref={ref} aria-label={id} className={className} {...props}>
				<List id={id} horizontal={horizontal}>
					{fillMenu(menu, id, id, horizontal, undefined)}
					{horizontal && (
						<Item
							rootId={`other-${id}`}
							title={t('More') as string}
							icon='MoreHoriz'
							isHorizontal
							isMore>
							{fillMenu(menu, `other-${id}`, `other-${id}`, false, true)}
						</Item>
					)}
				</List>
			</nav>
		);
	},
);
Navigation.displayName = 'Navigation';
Navigation.propTypes = {
	horizontal: PropTypes.bool,
	// @ts-ignore
	menu: PropTypes.shape({
		id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		text: PropTypes.string,
		path: PropTypes.string,
		icon: PropTypes.string,
		isDisable: PropTypes.bool,
		subMenu: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
				text: PropTypes.string,
				path: PropTypes.string,
				icon: PropTypes.string,
				isDisable: PropTypes.bool,
			}),
		),
	}).isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
};
Navigation.defaultProps = {
	horizontal: false,
	className: undefined,
};

export default Navigation;
