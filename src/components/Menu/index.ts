import InternalMenu, { type MenuProps } from './menu.tsx'
import MenuItem, { type MenuItemProps } from "./menuItem.tsx";
import SubMenu, { type SubMenuProps } from "./subMenu.tsx";

type InternalMenuType = typeof InternalMenu;

type CompoundedComponent = InternalMenuType & {
	Item: typeof MenuItem;
	SubItem: typeof SubMenu
}

const Menu = InternalMenu as CompoundedComponent

Menu.Item = MenuItem
Menu.SubItem = SubMenu

export type {
	MenuProps,
	MenuItemProps,
	SubMenuProps
}

export default Menu