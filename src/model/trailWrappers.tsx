import { makeStop } from './Stop'
import { TrailWrapper } from './TrailWrapper'

export const trailWrappers: TrailWrapper[] = [
	{
		name: 'Súly (g)',
		trail: [
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
		],
	},
	{
		name: 'Távolság (m)',
		trail: [
			makeStop({
				name: 'mm',
				multiplier: 1,
			}),
			makeStop({
				name: 'cm',
				multiplier: 10,
			}),
			makeStop({
				name: 'dm',
				multiplier: 100,
			}),
			makeStop({
				name: 'm',
				multiplier: 1000,
			}),
			makeStop({
				name: 'km',
				multiplier: 1000 * 1000,
			}),
		],
	},
	{
		name: 'Terület (m²)',
		trail: [
			makeStop({
				name: 'mm²',
				multiplier: 1,
			}),
			makeStop({
				name: 'cm²',
				multiplier: 100,
			}),
			makeStop({
				name: 'dm²',
				multiplier: 100 * 100,
			}),
			makeStop({
				name: 'm²',
				multiplier: 100 * 100 * 100,
			}),
			makeStop({
				name: 'a',
				multiplier: 100 * 100 * 100 * 100,
			}),
			makeStop({
				name: 'ha',
				multiplier: 100 * 100 * 100 * 100 * 100,
			}),
			makeStop({
				name: 'km²',
				multiplier: 100 * 100 * 100 * 100 * 100 * 100,
			}),
		],
	},
	{
		name: 'Térfogat (m³)',
		trail: [
			makeStop({
				name: 'mm³',
				multiplier: 1,
			}),
			makeStop({
				name: 'cm³',
				multiplier: 1000,
			}),
			makeStop({
				name: 'dm³',
				multiplier: 1000 * 1000,
			}),
			makeStop({
				name: 'm³',
				multiplier: 1000 * 1000 * 1000,
			}),
		],
	},
	{
		name: 'Térfogat (l)',
		trail: [
			makeStop({
				name: 'ml',
				multiplier: 1,
			}),
			makeStop({
				name: 'cl',
				multiplier: 10,
			}),
			makeStop({
				name: 'dl',
				multiplier: 100,
			}),
			makeStop({
				name: 'l',
				multiplier: 1000,
			}),
			makeStop({
				name: 'hl',
				multiplier: 1000 * 100,
			}),
		],
	},
	{
		name: 'Térfogat (m³ + l)',
		trail: [
			makeStop({
				name: 'mm³',
				multiplier: 1,
			}),
			makeStop({
				name: 'cm³',
				multiplier: 1000,
			}),
			makeStop({
				name: 'ml',
				multiplier: 1000,
			}),
			makeStop({
				name: 'cl',
				multiplier: 1000 * 10,
			}),
			makeStop({
				name: 'dl',
				multiplier: 1000 * 100,
			}),
			makeStop({
				name: 'dm³',
				multiplier: 1000 * 1000,
			}),
			makeStop({
				name: 'l',
				multiplier: 1000 * 1000,
			}),
			makeStop({
				name: 'hl',
				multiplier: 1000 * 1000 * 100,
			}),
			makeStop({
				name: 'm³',
				multiplier: 1000 * 1000 * 1000,
			}),
		],
	},
]
