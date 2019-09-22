export function pickRandomNumber(startOrEnd: number, end?: number) {
	if (end == null) {
		end = startOrEnd
		startOrEnd = 0
	}
	if (startOrEnd > end)
		throw new Error(`[py87ji] Invalid range: ${startOrEnd} – ${end}`)
	const diff = end - startOrEnd
	return startOrEnd + Math.floor(diff * Math.random())
}
