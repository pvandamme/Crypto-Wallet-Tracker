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
/*	<li
				onClick={() => handleClick('mc')}
				className="top-coins__sort-icon">
				<p># Market Cap</p>
				<i
					className={`fas fa-sort ${
						filterBy === 'mc' ? 'top-coins__active' : ''
					}`}></i>
			</li>
			<li
				className="top-coins__center"
				onClick={() => handleClick('price')}
				className="top-coins__sort-icon">
				<p># Price</p>
				<i
					className={`fas fa-sort ${
						filterBy === 'price' ? 'top-coins__active' : ''
					}`}></i>
			</li>
			<li
				onClick={() => handleClick('change')}
				className="top-coins__sort-icon">
				<p># Change (24h)</p>{' '}
				<i
					className={`fas fa-sort ${
						filterBy === 'change' ? 'top-coins__active' : ''
					}`}></i>
			</li>*/
