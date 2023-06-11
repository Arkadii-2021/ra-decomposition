import React from "react";
import classNames from 'classnames'


/** Компонент YLogo рендерит логотип YandexSearch */

export default function YLogo(props) {
	const {children, className, ...restProps} = props
	
	return (
		<div {...restProps} className={classNames("card-news-header", className)}>
			<img src="https://img.artlebedev.ru/everything/yandex/identity3/yandex2008.gif" className={classNames('serp-header__logo')} alt=""></img>
		</div>
	)
}