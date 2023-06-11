import React from "react";
import classNames from 'classnames'


/** Компонент выводит трансляции на разные таматики */

export default function Translation(props) {
	const {online, children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("card-news-story", className)}>
			{online.map((on, index) => {
				return (
				<div className={classNames('card-news-block')} key={index}>
					<img className="img-news" src={on.icon} alt={on.icon}/>
					<span style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>{on.name} </span><span style={{ textDecoration: "none", color: "gray", fontWeight: "normal" }}>{on.channel} </span>
				</div>
				)
			})}
		</div>
	)
}