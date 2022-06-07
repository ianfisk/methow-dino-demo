// Equation for Height of dino jump at a given time, t (ms)
// Height(t) = (gravity) * t^2 + (initial upward velocity) * t
// -(1/1600)t^2 + 0.7t
// relativeTimeMs = time in ms since the jump began
export function getRelativeJumpHeight(relativeTimeMs) {
	const gravity = 1/1600; // pixels per ms per ms
	const upwardJumpSpeed = 0.7; // pixels per ms
	const height = -gravity * Math.pow(relativeTimeMs, 2) + upwardJumpSpeed * relativeTimeMs;

	return height >= 0 ? height : 0;
}
