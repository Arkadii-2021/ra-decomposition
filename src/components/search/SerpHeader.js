import React from "react";
import classNames from 'classnames'


/** Родительский компонент SerpHeader отображает поле ввода для поиска */

export default function SerpHeader(props) {
	const {children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("navigation__region", className)}>{ children }</div>
	)
}