import { Stop } from '../model/Stop'
import { pickRandomNumber } from './pickRandomNumber'

export function distributeValue(
	n: number,
	stops: readonly Stop[],
	mayOverlap: boolean,
) {
	const stopsDescending = stops
		.slice()
		.sort((a, b) => b.multiplier - a.multiplier)
	let remainingValue = n
	let result = new Map<Stop, number>()
	for (const [index, stop] of stopsDescending.entries()) {
		const isLast = index === stopsDescending.length - 1
		if (isLast) {
			result.set(stop, remainingValue / stop.multiplier)
		} else {
			const value = Math.floor(
				(mayOverlap
					? pickRandomNumber(remainingValue)
					: remainingValue) / stop.multiplier,
			)
			remainingValue -= value * stop.multiplier
			result.set(stop, value)
		}
	}
	return result
}
