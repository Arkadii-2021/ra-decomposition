import React from "react";
import classNames from 'classnames'


/** Основной компонент навигации по выбору контента */

export default function NavigationSearch(props) {
	const {children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("navigation__region", className)}>{ children }</div>
	)
}