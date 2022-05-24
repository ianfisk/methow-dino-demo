import { drawSquare } from './utilities/draw-utils.js';

// Create a obstacle type "enumeration" (enum)
export const obstacleTypes = {
	box: 1,
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
