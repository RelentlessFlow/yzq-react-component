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
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
		<svg
			className={classes}
			aria-hidden="true"
			fill={color}
			width={10}
			height={10}
			{ ...restProps }
		>
			<use href={symbolId} />
		</svg>
		</div>
	)
}

export default Icon

export type {
	IconProps
}