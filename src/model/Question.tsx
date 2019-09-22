import { Stop } from './Stop'
export interface Question {
	questionParts: readonly [Stop, number][]
	answerLabel: string
	answer: number
}

export function makeQuestion(o: Question) {
	return o
}
