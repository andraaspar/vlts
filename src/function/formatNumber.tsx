const numberFormat = new Intl.NumberFormat('hu', {})

export function formatNumber(n: number): string {
	return numberFormat.format(n)
}
