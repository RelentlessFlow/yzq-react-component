import React from "react";
import { expect, describe, it, vitest } from "vitest";
import {fireEvent, render, screen} from "@testing-library/react";
import Button, { ButtonProps } from "./button.tsx";

const defaultProps = {
	onClick: vitest.fn()
}

const testProps: ButtonProps = {
	buttonType: 'primary',
	size: 'lg',
	className: 'yzq'
}

const linkProps: ButtonProps = {
	href: '/',
	buttonType: 'link'
}

const disabledProps: ButtonProps = {
	disabled: true,
	onClick: vitest.fn()
}

describe('test Button component', () => {
	it('should render the correct default button', () => {
		// const wrapper = render(<Button { ...defaultProps }>Nice</Button>)
		// const element = wrapper.getByText('Nice') as HTMLButtonElement

		// use screen object
		render(<Button { ...defaultProps }>Nice</Button>)
		const element = screen.getByText('Nice') as HTMLButtonElement

		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('BUTTON')
		expect(element).toHaveClass('yzq-btn yzq-btn-default')
		expect(element.disabled).toBeFalsy()
		fireEvent.click(element)
		expect(defaultProps.onClick).toHaveBeenCalled()
	})
	it('should render the correct component based on different props', () => {
		const wrapper = render(<Button { ...testProps }>Nice</Button>)
		const element = wrapper.getByText('Nice')
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('BUTTON')
		expect(element).toHaveClass('yzq-btn-primary yzq-btn-lg yzq')
	})
	it('should render a link when yzq-btnType equals link and href is provided', () => {
		const wrapper = render(<Button { ...linkProps }>Link</Button>)
		const element = wrapper.getByText('Link')
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('A')
		expect(element).toHaveClass('yzq-btn yzq-btn-link')
	})
	it('should render disable button when disabled set to ture', () => {
		const wrapper = render(<Button { ...disabledProps }>Nice</Button>)
		const element = wrapper.getByText('Nice') as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.disabled).toBeTruthy()
		fireEvent.click(element)
		expect(disabledProps.onClick).not.toHaveBeenCalled()
	})
})