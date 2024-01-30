import React from 'react'
import classNames from "classnames";

type ButtonSize = 'lg' | 'sm'
type ButtonType = 'default' | 'primary' | 'danger' | 'link'

interface BaseButtonProps {
	/**
	 * ClassName
	 */
	className?: string;
	/**
	 * 按钮是否可用
	 */
	disabled?: boolean;
	/**
	 * 按钮大小
	 */
	size?: ButtonSize;
	/**
	 * 按钮风格
	 */
	buttonType?: ButtonType;
	children?: React.ReactNode;
	/**
	 * buttonType为link时 标签可用
	 */
	href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
type ButtonProps = NativeButtonProps & AnchorButtonProps

const Button: React.FC<ButtonProps> = (
	{
		className,
		disabled = false,
		size,
		buttonType = 'default',
		href,
		children,
		...restProps
	}
) => {
	const classes = classNames('yzq-btn', {
		[`yzq-btn-${buttonType}`]: buttonType,
		[`yzq-btn-${size}`]: size,
		'disable': (buttonType === 'link') && disabled,
		[className ?? '']: className
	})

	return buttonType === 'link' ?
		<a
			className={classes}
			href={href}
			{...restProps}
		>
			{children}
		</a>
		:
		<button
			className={classes}
			disabled={disabled}
			{...restProps}
		>
			{children}
		</button>
}

export default Button

export type {
	ButtonSize,
	ButtonType,
	BaseButtonProps,
	ButtonProps
}