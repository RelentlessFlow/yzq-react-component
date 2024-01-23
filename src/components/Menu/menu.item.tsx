import classNames from "classnames";
import React, {useContext} from "react";
import { MenuContext, MenuId } from "@/components/Menu/menu.tsx";

interface MenuItemProps {
	id: MenuId;
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
	children?: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = (
	{
		id,
		disabled,
		className,
		style,
		children
	}
) => {
	const context = useContext(MenuContext)

	const classes = classNames('yzq-menu-item', className, {
		'is-disabled': disabled,
		'is-active': context.id === id
	})
	const handleClick = () => {
		if(context.onSelect && !disabled) {
			context.onSelect(id);
		}
	}
	return (
		<li className={classes} style={style} onClick={handleClick}>
			{ children }
		</li>
	)
}

export default MenuItem;

export type {
	MenuItemProps
}