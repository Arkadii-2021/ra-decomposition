import React from "react";
import classNames from 'classnames'


/** Компонент выводит список новостей из рубрики "Карта Германии" */

export default function CardList(props) {
	const {card, children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("card-news-story", className)}>
			{card.map((c, index) => {
				return (
				<div className={classNames('card-news-block')} key={index}>
					<a href={c.url} style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}><span>{c.title}</span></a>
				</div>
				)
			})}
		</div>
	)
}