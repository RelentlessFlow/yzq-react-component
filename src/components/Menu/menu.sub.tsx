import {MenuContext, MenuId} from "./menu.tsx";
import React, {useContext, useRef, useState} from "react";
import classNames from "classnames";
import Icon from "@/components/Icon";

interface SubMenuProps {
	id: MenuId;
	title: string;
	className?: string;
	children: React.ReactNode
}

const MenuSub: React.FC<SubMenuProps> = (
	{
		id,
		title,
		className,
		children
	}
) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const timer = useRef<ReturnType<typeof setTimeout>>()
	const context = useContext(MenuContext)
	const handleMouse  = (e: React.MouseEvent, toggle: boolean) => {
		if(timer.current) clearTimeout(timer.current)
		e.preventDefault();
		timer.current = setTimeout(() => {
			setMenuOpen(toggle);
		}, 50)
	}
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		setMenuOpen(!menuOpen);
		if(context.onSelect) context.onSelect(id);
	}
	const hoverEvents: Record<string, React.MouseEventHandler<HTMLDivElement>> = {
		onMouseEnter: (e) => handleMouse(e, true),
		onMouseLeave: (e) => handleMouse(e, false)
	}
	const clickEvents: Record<string, React.MouseEventHandler<HTMLDivElement>> = {
		onClick: handleClick
	}
	const classes = classNames('yzq-menu-item yzq-submenu-item', className, {
		'is-active': context.id === id
	})
	const submenuClasses = classNames('yzq-submenu', {
		'submenu-opened': menuOpen
	})

	return <li key={id} className={classes} { ...hoverEvents }>
		<div className={'yzq-submenu-title'} { ...clickEvents }>
			{ title }
			<Icon
				name={"under"}
				className={'yzq-submenu-title-arrow'}
			/>
		</div>
		<ul className={submenuClasses}>
			{ children }
		</ul>
	</li>
}

export type {
	SubMenuProps
}

export default MenuSub;