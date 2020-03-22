export const formatNumber = (n) => {
	n = Math.floor(n)
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const roundNumber = (n) => Math.floor(n * 10) / 10
