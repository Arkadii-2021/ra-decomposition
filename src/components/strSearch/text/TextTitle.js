import React from "react";
import classNames from 'classnames'


/** Компонент TextTitle текст под строкой поиска */

export default function TextTitle(props) {
	const {children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("card-news-block", className)}><span style={{ marginLeft: "4px", fontSize: "18px", color: "black" }}>Найдётся всё, например, </span><span style={{ fontSize: "18px", color: "gray" }}>фаза луны сегодня</span>
		</div>
	)
}