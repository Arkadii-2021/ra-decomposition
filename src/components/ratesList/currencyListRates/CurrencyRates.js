import React from "react";
import classNames from 'classnames'


/** Компонент CurrencyRates для вывода текущего курса валют из массива reatesList*/

export default function CurrencyRates(props) {
	const {children, className, ...restProps} = props
	
	const reatesList = [
		{
			name: "Курс USD/RUB",
			rate: "82,64",
			diff: "+0,55"
		},	
		{
			name: "Курс по ЦБ",
			rate: "89,01",
			diff: "+0,97"
		},	
		{
			name: "Нефть марки Brent",
			rate: "75,9",
			diff: "-0,51"
		}		
	]
	
	return (
		<div {...restProps} className={classNames("currency-rates-block", className)}>
			{reatesList.map((rates, index) => {
				return (
				<div className={classNames('currency-rates')} key={index}>
					<span>{rates.name} {rates.rate} </span><span style={{ color: "grey"}}>{rates.diff}</span>

				</div>
				)
			})}
		</div>
	)
}