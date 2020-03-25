import React from 'react'
import Select from 'react-select'
import { updateDisplay } from '../../state/actions/filtersTopActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getDisplay } from '../../state/selectors/filtersSelector'

const options = [
	{ value: 5, label: 5 },
	{ value: 10, label: 10 },
	{ value: 25, label: 25 }
]

const App = ({ updateDisplay, display }) => {
	const value = { value: display.value, label: `Per page: ${display.value}` }

	const customTheme = (theme) => ({
		...theme,
		colors: {
			...theme.colors,
			primary: '#3d5af1',
			borderWidth: 1
		}
	})
	const customStyles = {
		control: (provided, state) => {
			return {
				...provided,
				minHeight: 0
			}
		},
		indicatorSeparator: (provided, state) => ({
			...provided,
			marginTop: 4,
			marginBottom: 4
		})
	}

	return (
		<Select
			isSearchable={false}
			onChange={updateDisplay}
			options={options}
			value={value}
			theme={customTheme}
			styles={customStyles}
			className="react-select-container"
			classNamePrefix="react-select"
		/>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ updateDisplay }, dispatch)
}

const mapStateToProps = (state) => {
	return { display: getDisplay(state) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
