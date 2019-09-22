import React, { useCallback, useState } from 'react'
import { formatNumber } from '../function/formatNumber'
import { makeTrailQuestion } from '../function/makeTrailQuestion'
import { trailWrappers } from '../model/trailWrappers'

const trailIndexKey = 'trailIndex'

export function AppComp() {
	const [$trailIndex, set$trailIndex] = useState(() =>
		Math.max(
			trailWrappers.length - 1,
			parseInt(localStorage.getItem(trailIndexKey) || '0', 10),
		),
	)
	const [$index, set$index] = useState(0)
	const [$value, set$value] = useState('')
	const [$question, set$question] = useState(() =>
		makeTrailQuestion(trailWrappers[$trailIndex].trail),
	)
	const radioChanged = useCallback<
		React.ChangeEventHandler<HTMLInputElement>
	>(e => {
		const trailIndex = parseInt(e.target.value, 10)
		set$trailIndex(trailIndex)
		set$index(0)
		set$value('')
		set$question(makeTrailQuestion(trailWrappers[trailIndex].trail))
		localStorage.setItem(trailIndexKey, trailIndex + '')
	}, [])
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				const value = parseInt($value, 10)
				if (value === $question.answer) {
					alert(`Helyes!`)
					set$value('')
					set$index($index + 1)
					set$question(
						makeTrailQuestion(trailWrappers[$trailIndex].trail),
					)
				} else {
					alert(`Helytelen.`)
					set$value('')
				}
			}}
		>
			<div>
				{trailWrappers.map((trailWrapper, index) => (
					<label key={index}>
						<input
							type='radio'
							name='trail'
							value={index + ''}
							checked={$trailIndex === index}
							onChange={radioChanged}
						/>{' '}
						{trailWrapper.name}{' '}
					</label>
				))}
			</div>
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
