import React from "react";
import { SVG_PREFIX as prefix } from "@/assets/constant";
import classNames from "classnames";

type IconType = 'primary' | 'danger'

/**
 * name: icon目录下 [dir]-[name]
 */
interface IconBaseProps {
	name: string;
	color?: string;
	type?: IconType
}

type NativeSvgProps = React.SVGProps<SVGSVGElement>;

type IconProps = IconBaseProps & NativeSvgProps

const Icon: React.FC<IconProps> = (
	{
		name,
		color = '#000',
		type,
		className,
		...restProps
	}
) => {
	const symbolId = `#${prefix}-${name}`
	const classes = classNames('yzq-icon', className, {
		[`yzq-icon-${type}`]: type
	})
	return (
		<svg
			className={classes}
			aria-hidden="true"
			fill={color}
			width={20}
			height={20}
			{ ...restProps }
		>
			<use href={symbolId} />
		</svg>
	)
}

export default Icon

export type {
	IconProps
}