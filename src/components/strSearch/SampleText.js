import React from "react";
import classNames from 'classnames'


/** SampleText является родительским компонентом для вывода примера под поисковой строкой */

export default function SampleText(props) {
	const {children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("smp_text", className)}>{ children }</div>
	)
}