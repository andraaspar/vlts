import numbro from 'numbro'
import huHu from 'numbro/dist/languages/hu-HU.min.js'

numbro.registerLanguage(huHu)
numbro.setLanguage('hu-HU')

export function formatNumber(n: number): string {
	return numbro(n).format({
		thousandSeparated: true,
	})
}
