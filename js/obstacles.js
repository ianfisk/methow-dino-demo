import { drawSquare } from './utilities/draw-utils.js';

// Create a obstacle type "enumeration" (enum)
export const obstacleTypes = {
	box: 0,
	cactus: 1,
};

export function drawBox(gameCanvas, startx, starty) {
	drawSquare({
		canvas: gameCanvas,
		x: startx,
		y: starty + 60,
		size: 40,
		color: '#484848',
	});
}
export function drawCactus(gameCanvas, startx, starty) {
	drawSquare({
		canvas: gameCanvas,
		x: startx + 25,
		y: starty,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 20,
		y: starty + 10,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 20,
		y: starty + 30,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx,
		y: starty + 30,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 30,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx - 5,
		y: starty + 35,
		size: 15,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 50,
		y: starty + 35,
		size: 15,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx - 5,
		y: starty + 50,
		size: 15,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 20,
		y: starty + 50,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 50,
		y: starty + 50,
		size: 15,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx,
		y: starty + 55,
		size: 15,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 5,
		y: starty + 55,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 45,
		y: starty + 55,
		size: 15,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 35,
		y: starty + 55,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 20,
		y: starty + 70,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 20,
		y: starty + 90,
		size: 20,
		color: '#484848',
	});
}
