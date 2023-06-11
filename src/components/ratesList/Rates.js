import React from "react";
import classNames from 'classnames'


/** Блок компонента по текущему курсу валют*/

export default function Rates(props) {
	const {children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("currency-rates-block", className)}>{ children }</div>
	)
}