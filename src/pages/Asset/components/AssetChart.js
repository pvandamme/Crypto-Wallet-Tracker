import React from 'react'
import { connect } from 'react-redux'
import { getAssetSparkline } from 'state/selectors/assetSelectors'
import { Line } from 'react-chartjs-2'

const AssetChart = ({ sparkline }) => {
	let n = 1
	console.log(sparkline.price)
	const labels = sparkline.price.map((price, i) => {
		if (i === 0) {
			return 0
		}
		if (i / n === 24) {
			n++
			return n - 1
		} else {
			return ''
		}
	})
	const chartData = {
		labels: labels,
		datasets: [
			{
				label: 'Price',
				data: sparkline.price,
				backgroundColor: 'rgba(61, 91, 241, 0.3)',
				maintainAspectRatio: false
			}
		]
	}
	const chartOptions = {
		maintainAspectRatio: false
	}
	return (
		<div className="asset__chart">
			<Line data={chartData} options={chartOptions} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		sparkline: getAssetSparkline(state)
	}
}

export default connect(mapStateToProps)(AssetChart)
