import React from "react";
import classNames from 'classnames'


/** Является родительским компонентом для вывода групп новостей по разным рубрикам */

export default function NewsBlock(props) {
	const {title, children, className, ...restProps} = props
	return (
	<>
		<div className="card-news" style={{ fontWeight: "bold" }}>{title}</div>
		<div {...restProps} className={classNames("card-news", className)}>{ children }</div>
	</>
	)
}
