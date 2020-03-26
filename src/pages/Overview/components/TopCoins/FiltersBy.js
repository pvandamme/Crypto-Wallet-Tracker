import React from 'react'
import Filter from './Filter'

const FiltersBy = () => {
	return (
		<ul className="top-coins__grid top-coins__legend">
			<Filter filter="name" tag="# Name" />
			<Filter filter="mc" tag="# Market cap" />
			<Filter filter="price" tag="# Price" />
			<Filter filter="change" tag="# Change (24h)" />
		</ul>
	)
}

export default FiltersBy
