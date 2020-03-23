export const formatNumber = (n) => {
	let parts = n.toString().split('.')
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
	return parts.join('.')
}

export const roundNumber = (n, round) =>
	Math.floor(n * 10 * round) / (10 * round)
