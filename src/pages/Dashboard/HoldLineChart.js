import React from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'
import { cutChartNumber } from 'helpers/helpers'
import {
	getLineChart,
	getChartPending,
} from 'state/selectors/dashboardSelectors'
import LoadingSpinner from 'pages/Shared/LoadingSpinner'

const HoldLineChart = ({ chart, pending }) => {
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
				backgroundColor: 'rgba(61, 91, 241, 0.5)',
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
		<div className="hold__cointainer hold__margin">
			<h3>Portfolio chart</h3>
			<div className="hold__line-chart">
				{pending ? (
					<LoadingSpinner style={45} />
				) : (
					<Line options={chartOptions} data={chartData} />
				)}
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		chart: getLineChart(state),
		pending: getChartPending(state),
	}
}

export default connect(mapStateToProps)(HoldLineChart)
