import React, { FC, memo, ReactNode, useCallback, useContext, useRef, useState } from 'react';
import { TIcons } from '../../type/icons-type';
import useDarkMode from '../../hooks/useDarkMode';
import { useWindowSize } from 'react-use';
import ThemeContext from '../../contexts/themeContext';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Icon from '../../components/icon/Icon';
import { NavHashLink } from 'react-router-hash-link';
import { Manager, Popper, Reference } from 'react-popper';
import Collapse from '../../components/bootstrap/Collapse';
import PropTypes from 'prop-types';
import { List } from './Navigation';
// @ts-ignore
import useEventOutside from '@omtanke/react-use-event-outside';

interface IItemProps {
	children?: ReactNode;
	to?: string;
	title?: string;
	icon?: TIcons;
	id?: string;
	parentId?: string;
	rootId: string;
	isHorizontal?: boolean;
	notification?: boolean | string;
	isMore?: boolean;
	hide?: boolean;
	activeItem?: string;
	setActiveItem?(...args: unknown[]): unknown;
}
const Item: FC<IItemProps> = ({
	children,
	to,
	title,
	icon,
	id,
	parentId,
	rootId,
	isHorizontal,
	notification,
	isMore,
	hide,
	...props
}) => {
	const { darkModeStatus } = useDarkMode();
	const { width } = useWindowSize();
	const { setAsideStatus, setLeftMenuStatus, setRightMenuStatus } = useContext(ThemeContext);

	// eslint-disable-next-line react/prop-types
	const ACTIVE = props.activeItem === id;

	const handleClick = () => {
		if (typeof props.setActiveItem !== 'undefined') {
			// eslint-disable-next-line react/prop-types, @typescript-eslint/no-unused-expressions
			ACTIVE ? props.setActiveItem(null) : props.setActiveItem(id);
		}
	};

	const linkHandleClick = () => {
		// For Mobile Design
		if (width < Number(process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE)) setAsideStatus(false);
		setLeftMenuStatus(false);
		setRightMenuStatus(false);
	};

	const ANCHOR_LINK_PATTERN = /^#/i;
	const location = useLocation();

	// For aside menu
	const here = typeof to === 'string' && to !== '/' && location.pathname.includes(to);
	// For top menu
	const match = to !== '/' && location.pathname === to;

	const { t } = useTranslation('menu');

	const LINK_CLASS = classNames('navigation-link', 'navigation-link-pill', {
		collapsed: !!children && !isHorizontal,
		active: isHorizontal ? match : here,
	});

	const INNER = (
		<>
			<span className='navigation-link-info'>
				{icon && <Icon className='navigation-icon' icon={icon} />}
				{title && <span className='navigation-text'>{t(title) as ReactNode}</span>}
			</span>
			{(!!children || !!notification) && (
				<span className='navigation-link-extra'>
					{!!notification && (
						<Icon
							icon='Circle'
							className={classNames(
								'navigation-notification',
								{
									[`text-${notification}`]: typeof notification === 'string',
									'text-danger': typeof notification !== 'string',
								},
								'animate__animated animate__heartBeat animate__infinite animate__slower',
							)}
						/>
					)}
					{!!children && <Icon className='navigation-arrow' icon='ChevronRight' />}
				</span>
			)}
		</>
	);

	const WITHOUT_CHILD =
		!children &&
		!hide &&
		((typeof to === 'string' && ANCHOR_LINK_PATTERN.test(to) && (
			<NavHashLink className={LINK_CLASS} to={to} onClick={linkHandleClick}>
				{INNER}
			</NavHashLink>
		)) || (
			<NavLink
				end
				// @ts-ignore
				className={classNames(LINK_CLASS, ({ isActive }) => (isActive ? 'active' : ''))}
				to={`../${to}`}
				onClick={linkHandleClick}>
				{INNER}
			</NavLink>
		));

	// Dropdown
	const dropdownRef = useRef(null);

	const dropdownButtonRef = useRef(null);
	const setButtonRef = useCallback((node: null, ref: (arg0: any) => any) => {
		dropdownButtonRef.current = node;
		return ref(node);
	}, []);

	const dropdownListRef = useRef(null);
	const setListRef = useCallback((node: null, ref: (arg0: any) => any) => {
		dropdownListRef.current = node;
		return ref(node);
	}, []);

	const [dropdownStatus, setDropdownStatus] = useState(false);

	const dropdownButtonHandleClick = () => {
		setDropdownStatus(!dropdownStatus);
	};

	// Clicking outside to close
	const closeMenu = useCallback(() => {
		setDropdownStatus(false);
	}, []);
	useEventOutside(dropdownRef, 'mousedown', closeMenu);
	useEventOutside(dropdownRef, 'touchstart', closeMenu);

	if (children) {
		// submenu && in header
		if (isHorizontal) {
			return (
				<Manager>
					<li
						ref={dropdownRef}
						className={classNames('navigation-item', 'dropdown', {
							'navigation-item-more': isMore,
						})}>
						<Reference>
							{({ ref }) => (
								<span
									// @ts-ignore
									ref={(node) => setButtonRef(node, ref)}
									id={`${rootId}__${id}--link`}
									className={LINK_CLASS}
									// data-bs-toggle='dropdown'
									// data-bs-target={`#${rootId}__${id}`}
									aria-expanded={dropdownStatus}
									aria-controls={`${rootId}__${id}`}
									role='button'
									tabIndex={-1}
									onClick={dropdownButtonHandleClick}
									onKeyDown={dropdownButtonHandleClick}>
									{INNER}
								</span>
							)}
						</Reference>
						{dropdownStatus && (
							<Popper
								placement='bottom-start'
								modifiers={[
									{
										name: 'flip',
										options: {
											fallbackPlacements: [`bottom-end`, `bottom-start`],
										},
									},
								]}>
								{({ ref, style, placement }) => (
									<List
										// @ts-ignore
										ref={(node) => setListRef(node, ref)}
										style={style}
										data-placement={placement}
										id={`${rootId}__${id}`}
										className={classNames(
											'dropdown-menu',
											{
												'dropdown-menu-dark': darkModeStatus,
											},
											'show',
										)}
										ariaLabelledby={`${rootId}__${id}--link`}
										rootId={rootId}
										parentId={`${rootId}__${parentId}`}
										onMouseLeave={() => setDropdownStatus(false)}>
										{children}
									</List>
								)}
							</Popper>
						)}
					</li>
				</Manager>
			);
		}
		// submenu && in aside
		return (
			<li className='navigation-item'>
				<span
					id={`${rootId}__${id}--link`}
					className={LINK_CLASS}
					// data-bs-toggle='collapse'
					// data-bs-target={`#${rootId}__${id}`}
					aria-expanded={ACTIVE}
					aria-controls={`${rootId}__${id}`}
					role='button'
					tabIndex={-1}
					onClick={handleClick}
					onKeyDown={handleClick}>
					{INNER}
				</span>
				<Collapse isOpen={ACTIVE} isChildClone>
					<List
						id={`${rootId}__${id}`}
						ariaLabelledby={`${rootId}__${id}--link`}
						rootId={rootId}
						parentId={`${rootId}__${parentId}`}
						onMouseLeave={closeMenu}>
						{children}
					</List>
				</Collapse>
			</li>
		);
	}
	// without submenu
	return <li className='navigation-item'>{WITHOUT_CHILD}</li>;
};
Item.propTypes = {
	children: PropTypes.node,
	to: PropTypes.string,
	title: PropTypes.string,
	icon: PropTypes.string,
	id: PropTypes.string,
	parentId: PropTypes.string,
	rootId: PropTypes.string.isRequired,
	isHorizontal: PropTypes.bool,
	notification: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	isMore: PropTypes.bool,
	hide: PropTypes.bool,
};
Item.defaultProps = {
	children: null,
	to: undefined,
	title: undefined,
	icon: undefined,
	id: undefined,
	parentId: undefined,
	isHorizontal: false,
	notification: false,
	isMore: false,
	hide: false,
};

export default memo(Item);
