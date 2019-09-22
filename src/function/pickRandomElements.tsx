import { pickRandomElement } from './pickRandomElement'

export function pickRandomElements<T>(
	count: number,
	elements: readonly T[],
): T[] {
	if (elements.length < count)
		throw new Error(`[py87ao] Not enough elements.`)
	let elementsPicked: T[] = []
	let remainingElements = elements
	for (let i = 0; i < count; i++) {
		const [element, rest] = pickRandomElement(remainingElements)
		remainingElements = rest
		elementsPicked.push(element)
	}
	return elementsPicked
}
