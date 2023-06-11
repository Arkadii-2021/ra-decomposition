import React from "react";
import classNames from 'classnames'


/** Дочерний компонент SearchInput включает в себя элемент строки поиска */

export default function SearchInput(props) {
	const {children, className, ...restProps} = props
	
	return (
		<div {...restProps} className={classNames("search-block", className)}>
		<input type="text" className="string-search" /><span className="btn-search">Найти</span>
		</div>
	)
}