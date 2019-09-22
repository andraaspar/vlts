import { makeQuestion, Question } from '../model/Question'
import { Trail } from '../model/Trail'
import { distributeValue } from './distributeValue'
import { pickRandomElement } from './pickRandomElement'
import { pickRandomElements } from './pickRandomElements'
import { pickRandomNumber } from './pickRandomNumber'

export function makeTrailQuestion(trail: Trail, mayOverlap: boolean): Question {
	const count = 2
	const stops = pickRandomElements(count, trail)
	const [answerStop, questionStops] = pickRandomElement(stops)
	const answerStep = Math.max(
		answerStop.multiplier,
		questionStops.reduce(
			(smallest, stop) => Math.min(smallest, stop.multiplier),
			Infinity,
		),
	)
	const answerMax =
		Math.max(
			answerStop.multiplier,
			questionStops.reduce(
				(largest, stop) => Math.max(largest, stop.multiplier),
				1,
			),
		) * 100
	const answerBeforeTrick =
		(Math.floor(pickRandomNumber(answerStep, answerMax) / answerStep) *
			answerStep) /
		answerStop.multiplier
	const answer =
		Math.random() < 0.3
			? round(answerBeforeTrick, 100)
			: Math.random() < 0.5
			? round(answerBeforeTrick, 10)
			: answerBeforeTrick
	const questionValues = distributeValue(
		answer * answerStop.multiplier,
		questionStops,
		mayOverlap,
	)
	const questionParts = Array.from(questionValues.entries()).filter(
		([, value]) => value > 0,
	)
	return makeQuestion({
		answer,
		answerLabel: answerStop.name,
		questionParts,
	})
}

function round(n: number, m: number): number {
	const rounded = Math.round(n / m) * m
	return rounded === 0 ? n : rounded
}
