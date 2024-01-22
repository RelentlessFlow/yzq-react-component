import { describe, vitest, it, beforeEach, expect } from "vitest";
import { cleanup, fireEvent, render, RenderResult, waitFor } from "@testing-library/react";
import Menu, { MenuProps } from "./index.ts";

const testProps: MenuProps = {
	defaultIndex: 0,
	onSelect: vitest.fn(),
	className: 'test'
}

const testVerProps: MenuProps = {
	defaultIndex: 0,
	mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
	return (
		<Menu { ...props }>
			<Menu.Item id={0}>
				active
			</Menu.Item>
			<Menu.Item id={1} disabled>
				disabled
			</Menu.Item>
			<Menu.Item id={2}>
				2
			</Menu.Item>
			<Menu.SubItem title={'3'} id={'3'}>
				<Menu.Item id={'3-1'}>
					menu3-1
				</Menu.Item>
				<Menu.Item id={'3-2'}>
					menu3-2
				</Menu.Item>
			</Menu.SubItem>
		</Menu>
	)
}
const createStyleFile = () => {
	const cssFile: string = `
		.yzq-submenu {
			display: none;
		}
		.yzq-submenu.submenu-opened {
			display: block;
		}
	`
	const style = document.createElement('style')
	style.innerHTML = cssFile
	return style
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu and MenuItem component', () => {
	beforeEach(() => {
		wrapper = render(generateMenu(testProps))
		wrapper.container.append(createStyleFile())
		menuElement = wrapper.getByTestId('test-menu')
		activeElement  = wrapper.getByText('active')
		disabledElement  = wrapper.getByText('disabled')
	})
	it('should render correct Menu and MenuItem based on default props', () => {
		expect(menuElement).toBeInTheDocument()
		expect(menuElement).toHaveClass('yzq-menu test')
		expect(menuElement.getElementsByTagName('li').length).toEqual(6)
		expect(activeElement).toHaveClass('yzq-menu-item is-active')
		expect(disabledElement).toHaveClass('yzq-menu-item is-disabled')
	})
	it('click items should change active and call the right callback', () => {
		const thirdItem = wrapper.getByText('2')
		fireEvent.click(thirdItem)
		expect(thirdItem).toHaveClass('is-active')
		expect(activeElement).not.toHaveClass('is-active')
		expect(testProps.onSelect).toHaveBeenCalledWith(2)
		fireEvent.click(disabledElement)
		expect(disabledElement).not.toHaveClass('is-active')
		expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
	})
	it('should render vertical mode when mode is set to vertical', () => {
		cleanup()
		const wrapper = render(generateMenu(testVerProps))
		const menuElement = wrapper.getByTestId('test-menu')
		expect(menuElement).toHaveClass('yzq-menu-vertical')
	})
	it('should show dropdown items when hover on subMenu', async () => {
		expect(wrapper.queryByText('menu3-1')).not.toBeVisible()
		const dropdownElement = wrapper.getByText('3')
		fireEvent.mouseEnter(dropdownElement);
		// 断言 一直重复执行直到发生异常停止或成功运行为止
		await waitFor(() => expect(wrapper.queryByText('menu3-1')).toBeVisible())
		fireEvent.mouseLeave(dropdownElement);
		await waitFor(() => expect(wrapper.queryByText('menu3-1')).not.toBeVisible())
	})
})