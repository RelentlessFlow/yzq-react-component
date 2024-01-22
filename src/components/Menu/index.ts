import InternalForm, { type MenuProps } from './menu.tsx'
import MenuItem, { type MenuItemProps } from "./menuItem.tsx";
import SubMenu, { type SubMenuProps } from "./subMenu.tsx";

type InternalFormType = typeof InternalForm;

type CompoundedComponent = InternalFormType & {
	Item: typeof MenuItem;
	SubItem: typeof SubMenu
}

const Menu = InternalForm as CompoundedComponent

Menu.Item = MenuItem
Menu.SubItem = SubMenu

export type {
	MenuProps,
	MenuItemProps,
	SubMenuProps
}

export default Menu