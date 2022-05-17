// Good tutorial on drawing shapes in a canvas
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
export function drawSquare({ canvas, x, y, size, color }) {  // "destructuring" the first parameter
	// Docs on context: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
	const ctx = canvas.getContext('2d');

	// Save current context settings so we can restore this at the end of
	// the function – we don't want this function to change the settings
	// and leave them changed after the function returns.
	ctx.save();

	ctx.fillStyle = color;
	ctx.fillRect(x, y, size, size);

	ctx.restore();
}


// // Same as above function, just without destructuring synctactic sugar
// export function drawSquare(argsObject) {
// 	const canvas = argsObject.canvas;
// 	const x = argsObject.x;
// 	const y = argsObject.y;
// 	const size = argsObject.size;
// 	const color = argsObject.color;

// 	const ctx = canvas.getContext('2d');

// 	// Save current context settings so we can restore this at the end of
// 	// the function – we don't want this function to change the settings
// 	// and leave them changed after the function returns.
// 	ctx.save();

// 	ctx.fillStyle = color;
// 	ctx.fillRect(x, y, size, size);

// 	ctx.restore();
// }
