import React from "react";
import classNames from 'classnames'


/** Компонент NavigationItemSearch для перехода по ссылке для типового поиска нужного контента */

export default function NavigationItemSearch(props) {
	const {children, className, ...restProps} = props
	
	const searchType = [
		{
			serviceName: "Видео",
			url: "https://yandex.ru/video/?from=tabbar",
		},	{
			serviceName: "Картинки",
			url: "https://yandex.ru/images/?from=tabbar",
		},	{
			serviceName: "Новости",
			url: "https://yandex.ru/news/?from=tabbar",
		},	{
			serviceName: "Карты",
			url: "https://yandex.ru/maps/?from=tabbar",
		},	{
			serviceName: "Маркет",
			url: "https://yandex.ru/products?from=tabbar&lr=65",
		},	{
			serviceName: "Переводчик",
			url: "https://https://translate.yandex.ru/?from=tabbar",
		},	{
			serviceName: "Эфир",
			url: "https://yandex.ru/tv/?from=tabbar",
		},	{
			serviceName: "ещё",
			url: "https://yandex.ru/all?from=tabbar",
		},	
		
	]
	
	return (
		<div {...restProps} className={classNames("card-news-header", className)}>
			{searchType.map((service, index) => {
				return (
				<a href={service.url} className={classNames('service__name')} key={index}>
					{service.serviceName}
				</a>
				)
			})}
		</div>
	)
}