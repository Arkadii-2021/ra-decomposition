import React from "react";
import classNames from 'classnames'


/** Родительский новостной компонент*/

export default function CardNews(props) {
	const {children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("card-news", className)}>{ children }</div>
	)
}