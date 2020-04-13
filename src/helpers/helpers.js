export const formatNumber = (n, split) => {
	let parts = n.toString().split('.')
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return split ? parts.join('.').split('.', 2)[0] : parts.join('.')
}

export const roundNumber = (n, round) =>
	Math.floor(n * 10 * round) / (10 * round)

export const cutNumber = (n) =>
	n < 1 ? n.toFixed(20).match(/^-?\d*\.?0*\d{0,3}/)[0] : n

export const cutChartNumber = (n) =>
	n < 1 ? n.toFixed(20).match(/^-?\d*\.?0*\d{0,5}/)[0] : n.toFixed(5)
