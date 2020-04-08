import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'
import { cutChartNumber } from 'helpers/helpers'
import { getLineChart } from 'state/selectors/dashboardSelectors'

const HoldLineChart = ({ chart }) => {
	const labels = chart.map((elem) => {
		const date = new Date(elem[0]).toUTCString()
		return date.slice(0, 12) + date.slice(17, 22)
	})

	const data = chart.map((elem) => cutChartNumber(elem[1]))

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: 'Price',
				data,
				backgroundColor: 'rgba(61, 91, 241, 0.3)',
				pointRadius: 0,
				lineTension: 0,
			},
		],
	}
	const chartOptions = {
		maintainAspectRatio: false,
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		scales: {
			xAxes: [
				{
					gridLines: {
						color: 'rgba(0, 0, 0, 0)',
					},
				},
			],
			yAxes: [
				{
					gridLines: {},
				},
			],
		},
	}
	return (
		<div className="asset__chart">
			<Line data={chartData} options={chartOptions} />
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		chart: getLineChart(state),
	}
}

export default connect(mapStateToProps)(HoldLineChart)
