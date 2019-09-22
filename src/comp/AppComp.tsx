import React, { useCallback, useState } from 'react'
import { formatNumber } from '../function/formatNumber'
import { makeTrailQuestion } from '../function/makeTrailQuestion'
import { weightTrail } from '../model/trails'

export function AppComp() {
	const [$index, set$index] = useState(0)
	const [$value, set$value] = useState('')
	const makeQuestion = useCallback(
		() => makeTrailQuestion(weightTrail, false),
		[],
	)
	const [$question, set$question] = useState(makeQuestion)
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				const value = parseInt($value, 10)
				if (value === $question.answer) {
					alert(`Helyes!`)
					set$value('')
					set$index($index + 1)
					set$question(makeQuestion())
				} else {
					alert(`Helytelen.`)
					set$value('')
				}
			}}
		>
			<div>{$index + 1}.</div>
			<table>
				<tbody>
					{$question.questionParts.map(([stop, value], index) => (
						<tr key={index}>
							<td style={{ textAlign: 'right' }}>
								{formatNumber(value)}
							</td>
							<td>{stop.name}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<input
					type='number'
					style={{ textAlign: 'right' }}
					value={$value}
					onChange={e => {
						set$value(e.target.value)
					}}
				/>{' '}
				{$question.answerLabel}
			</div>
			<div>
				<button>OK</button>
			</div>
		</form>
	)
}
