import React from "react";
import classNames from 'classnames'

/** Дочерний блок NewsHeader по выбору новостной рубрики */

export default function NewsHeader(props) { 
	const {children, className, ...restProps} = props
	
	const newsTitleList = [
		{
			url: 'https://dzen.ru/',
			text: 'Сейчас в СМИ'
		},
		{
			url: 'https://dzen.ru/',
			text: 'Новосибирск'
		},
		{
			url: 'https://dzen.ru/',
			text: 'Рекомендуем'
		}
	]
	
	return (
		<div {...restProps} className={classNames('card-news-header', className)}>
			{newsTitleList.map((title, index) => {
				return (
					<a href={title.url} className={classNames('card-news')} key={index}>{title.text}</a>
				)
			})}
			<div className="date__widget" style={{ color: "grey"}}>10 июня 2023 года</div>
		</div>
	)
}