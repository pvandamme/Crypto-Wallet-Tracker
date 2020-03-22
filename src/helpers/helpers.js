export const formatNumber = (n) => {
	n = Math.floor(n)
	return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
