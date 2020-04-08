import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { connect } from 'react-redux'
import { getChartData } from 'state/selectors/dashboardSelectors'

const chartOptions = {
	maintainAspectRatio: false,
}

const HoldDoughnutChart = ({ data }) => {
	const chartData = {
		labels: data.labels.length ? data.labels : ['No transaction'],
		datasets: [
			{
				label: 'Percentage %',
				data: data.data.length ? data.data : [1],
				backgroundColor: data.backgroundColor.length
					? data.backgroundColor
					: ['#0e283a'],
			},
		],
	}
	return (
		<div className="hold-chart doughnut-chart">
			<h3>Portfolio distribution</h3>
			<Doughnut data={chartData} options={chartOptions} />
		</div>
	)
}

const mapStateToPros = (state) => {
	return {
		data: getChartData(state),
	}
}

export default connect(mapStateToPros)(HoldDoughnutChart)