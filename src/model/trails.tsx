import { makeStop } from './Stop'
import { Trail } from './Trail'

export const weightTrail: Trail = [
	makeStop({
		name: 'g',
		multiplier: 1,
	}),
	makeStop({
		name: 'dkg',
		multiplier: 10,
	}),
	makeStop({
		name: 'kg',
		multiplier: 1000,
	}),
	makeStop({
		name: 'q',
		multiplier: 1000 * 100,
	}),
	makeStop({
		name: 't',
		multiplier: 1000 * 1000,
	}),
]
