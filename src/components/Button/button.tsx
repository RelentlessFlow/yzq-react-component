import React from 'react'
import classNames from "classnames";
import type {ButtonProps} from "./type.ts";

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