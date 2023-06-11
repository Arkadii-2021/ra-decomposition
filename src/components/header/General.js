import React from "react";
import classNames from 'classnames'

/** Родительский компонент General, от которого наследуется NewsHeader по рубрикам */

export default function General(props) {
	const {children, className, ...restProps} = props
	return (
		<div {...restProps} className={classNames(className)}>{ children }</div>
	)
}
