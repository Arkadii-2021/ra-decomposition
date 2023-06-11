import React from "react";
import classNames from 'classnames'


/** Компонент выводит список новостей из рубрики "Посещаемое" */

export default function VisitedList(props) {
	const {listVisited, children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("card-news-story", className)} style={{ display: "flex" }}>
			{listVisited.map((visited, index) => {
				return (
				<div className={classNames('card-news-block')} key={index}>
					<a href={visited.url} style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}><span>{visited.title}</span><span style={{ textDecoration: "none", color: "gray", fontWeight: "normal" }}>{visited.name}</span></a>
				</div>
				)
			})}
		</div>
	)
}