import React, {createContext, useState} from 'react';
import classNames from "classnames";

type MenuMode = 'horizontal' | 'vertical';
type MenuId = React.Key | string | number
type SelectCallback = (selectId: MenuId) => void
interface MenuProps {
	defaultIndex?: MenuId;
	className?: string;
	mode?: MenuMode;
	style?: React.CSSProperties;
	onSelect?: SelectCallback;
	children?: React.ReactNode;
}

interface IMenuContext {
	id?: React.Key;
	onSelect?: SelectCallback;
}

const MenuContext = createContext<IMenuContext>({})

const Menu: React.FC<MenuProps> = (
	{
		className,
		mode,
		style,
		children,
		onSelect,
		defaultIndex
	}
) => {

	const [currentActive,setActive] = useState(defaultIndex);

	const classes = classNames('yzq-menu', className, {
		'yzq-menu-vertical': mode === 'vertical',
		'yzq-menu-horizontal': mode !== 'vertical'
	})

	const handleClick = (id: MenuId) => {
		setActive(id);
		if(onSelect) onSelect(id);
	}

	const passedContext: IMenuContext = {
		id: currentActive,
		onSelect: handleClick
	}

	return (
		<ul className={classes} style={style} data-testid={'test-menu'}>
			<MenuContext.Provider value={passedContext}>
				{ children }
			</MenuContext.Provider>
		</ul>
	)
}

export default Menu;

export {
	MenuContext,
}

export type {
	MenuProps,
	MenuId
}