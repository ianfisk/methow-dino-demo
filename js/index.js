import { createCanvas } from './utilities/canvas-utils.js';
import { drawSquare } from './utilities/draw-utils.js';

console.log("This is an example log statement!");

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 400,
	heightPx: 200,
});

// Example use of drawSquare.
drawSquare({
	canvas: gameCanvas,
	// X, Y coordinates in the canvas of the top left corner of the square
	// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
	x: 50,
	y: 50,

	// Length of the square's sides
	size: 10,

	// Fill color
	color: '#484848',
});

// TODO(noah): Use the drawSquare function to draw squares that compose the dino!
// (Or whatever creature you'd like.)
