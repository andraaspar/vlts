import { pickRandomNumber } from './pickRandomNumber'
export function pickRandomElement<T>(elements: readonly T[]): [T, T[]] {
	if (elements.length === 0) {
		throw new Error(`[py874r] No items.`)
	} else if (elements.length === 1) {
		return [elements[0], []]
	} else {
		const index = pickRandomNumber(elements.length)
		return [
			elements[index],
			[...elements.slice(0, index), ...elements.slice(index + 1)],
		]
	}
}
