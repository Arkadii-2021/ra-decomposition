import React from "react";
import classNames from 'classnames'


/** Компонент для вывода списка новостей */

export default function NewsList(props) {
	const {children, className, ...restProps} = props
	
	const listNews = [
		{
			icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Yandex_Zen_logo_icon.svg",
			url: "https://dzen.ru/",
			title: "Травников высказался о баннере с портретом бойца СВО, которым накрыли мусор"
		},		
		{
			icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Yandex_Zen_logo_icon.svg",
			url: "https://dzen.ru/",
			title: "В Новосибирске составлен прогноз погоды на июнь 2023 года"
		},		
		{
			icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Yandex_Zen_logo_icon.svg",
			url: "https://dzen.ru/",
			title: "В Новосибирске ищут подрядчика строительства дороги к ЛДС"
		},		
		{
			icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Yandex_Zen_logo_icon.svg",
			url: "https://dzen.ru/",
			title: "В Новосибирске прокуратура проверит все аттракционы после ЧП с детьми"
		},
		{
			icon: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Yandex_Zen_logo_icon.svg",
			url: "https://dzen.ru/",
			title: "В Новосибирск на День города привезут артистов за 18 миллионов рублей"
		}
	]
	
	return (
		<div {...restProps} className={classNames("card-news-story", className)}>
			{listNews.map((storyNews, index) => {
				return (
				<div className={classNames('card-news-block')} key={index}>
					<img className="img-news" src={storyNews.icon} alt={storyNews.url}/>
					<a href={storyNews.url} style={{ textDecoration: "none", color: "black" }}>{storyNews.title}</a>
				</div>
				)
			})}
		</div>
	)
}
