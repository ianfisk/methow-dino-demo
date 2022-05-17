import { createCanvas } from './utilities/canvas-utils.js';
import { drawSquare } from './utilities/draw-utils.js';

var creatureType = 1;

console.log("This is an example log statement!");

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 400,
	heightPx: 200,
});

// Example use of drawSquare.
// drawSquare({
	// canvas: gameCanvas,
	// X, Y coordinates in the canvas of the top left corner of the square
	// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
	// x: 50,
	// y: 50,

	// Length of the square's sides
	// size: 10,

	// Fill color
	// color: '#484848',
// });
// TODO(noah): Use the drawSquare function to draw squares that compose the dino!
// (Or whatever creature you'd like.)
// Test "Creature"
if(creatureType == 0){
	drawSquare({
		canvas: gameCanvas,
		x: 50,
		y: 60,
		size: 60,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 60,
		y: 120,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 60,
		y: 130,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 70,
		y: 130,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 120,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 130,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 100,
		y: 130,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 70,
		y: 80,
		size: 10,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 100,
		y: 80,
		size: 10,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 80,
		y: 100,
		size: 10,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 100,
		size: 10,
		color: '#F7F7F7',
	});
}
// Attempt at Dino
if(creatureType == 1){
	drawSquare({
		canvas: gameCanvas,
		x: 95,
		y: 30,
		size: 30,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 105,
		y: 30,
		size: 30,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 35,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 115,
		y: 35,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 100,
		y: 40,
		size: 5,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 45,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 115,
		y: 65,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 120,
		y: 65,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 125,
		y: 65,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 35,
		y: 70,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 85,
		y: 70,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 35,
		y: 75,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 75,
		y: 75,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 80,
		y: 75,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 35,
		y: 80,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 65,
		y: 80,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 105,
		y: 80,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 110,
		y: 80,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 35,
		y: 85,
		size: 15,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 60,
		y: 85,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 110,
		y: 85,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 50,
		y: 90,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 60,
		y: 90,
		size: 30,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 40,
		y: 100,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 45,
		y: 100,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 100,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 110,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 55,
		y: 115,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 60,
		y: 120,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 70,
		y: 120,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 80,
		y: 120,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 85,
		y: 120,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 85,
		y: 125,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 60,
		y: 130,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 85,
		y: 130,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 60,
		y: 135,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 65,
		y: 135,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 85,
		y: 135,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: 90,
		y: 135,
		size: 5,
		color: '#484848',
	});
}
