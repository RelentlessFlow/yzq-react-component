import React from "react";

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

export type {
	ButtonSize,
	ButtonType,
	ButtonProps
}