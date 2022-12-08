import { ElementType, HTMLAttributes, JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { IButtonProps } from './Button';
import { TDropdownDirection } from '../../type/dropdown-type';

interface IDropdownToggleProps {
	children: ReactElement<IButtonProps> | ReactNode;
	isOpen?: boolean;
	setIsOpen?: (value: ((prevState: boolean) => boolean) | boolean | null) => void | null;
	hasIcon?: boolean;
	isStatic?: boolean;
}

interface IDropdownMenuProps extends HTMLAttributes<HTMLUListElement> {
	isOpen?: boolean;
	setIsOpen?: (value: ((prevState: boolean) => boolean) | boolean | null) => void | null;
	children:
		| ReactElement<IDropdownItemProps>
		| ReactElement<IDropdownItemProps>[]
		| ReactNode
		| ReactNode[];
	className?: string;
	isAlignmentEnd?: boolean;
	breakpoint?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | null;
	size?: 'sm' | 'md' | 'lg' | null;
	direction?: string | null;
	isCloseAfterLeave?: boolean;
}

interface IDropdownItemProps extends HTMLAttributes<HTMLLIElement> {
	children?: ReactElement<any, string | JSXElementConstructor<any>> | string;
	isHeader?: boolean;
	isDivider?: boolean;
	isText?: boolean;
}

export interface IDropdownProps {
	tag?: ElementType;
	children: ReactElement<IDropdownToggleProps>[] | ReactElement<IDropdownMenuProps>[];
	isOpen?: boolean | null;
	setIsOpen?(...args: unknown[]): unknown;
	direction?: TDropdownDirection;
	isButtonGroup?: boolean;
	className?: string;
}
