import InternalMenu, { type MenuProps } from './menu.tsx'
import MenuItem, { type MenuItemProps } from "./menu.item.tsx";
import MenuSub, { type SubMenuProps } from "./menu.sub.tsx";

type InternalMenuType = typeof InternalMenu;

type CompoundedComponent = InternalMenuType & {
	Item: typeof MenuItem;
	SubItem: typeof MenuSub
}

const Menu = InternalMenu as CompoundedComponent

Menu.Item = MenuItem
Menu.SubItem = MenuSub

export type {
	MenuProps,
	MenuItemProps,
	SubMenuProps
}

export default Menu