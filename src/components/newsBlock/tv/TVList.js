import React from "react";
import classNames from 'classnames'


/** Компонент выводит программу телепередач */

export default function TVList(props) {
	const {tv, children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames("card-news-story", className)}>
			{tv.map((t, index) => {
				return (
				<div className={classNames('card-news-block')} key={index}>
					<div style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}><span>{t.time} </span><span>{t.name} </span><span style={{ textDecoration: "none", color: "gray", fontWeight: "normal" }}>{t.channel}</span></div>
				</div>
				)
			})}
		</div>
	)
}