import React from 'react'
import classNames from "classnames";

type ButtonSize = 'lg' | 'sm'
type ButtonType = 'default' | 'primary' | 'danger' | 'link'

interface BaseButtonProps {
	className?: string;
	disabled?: boolean;
	size?: ButtonSize;
	buttonType?: ButtonType;
	children?: React.ReactNode;
	href?: string
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
	const {
		className,
		disabled,
		size,
		buttonType = 'default',
		href,
		children,
		...restProps
	} = props;

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
	ButtonProps
}