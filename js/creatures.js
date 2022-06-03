import { drawSquare } from './utilities/draw-utils.js';
import { leg_motion } from './index.js'

// Create a creature type "enumeration" (enum)
export const creatureTypes = {
	creature: 0,
	dino: 1,
};
export function drawCreature(gameCanvas, startx, starty) {
	drawSquare({
		canvas: gameCanvas,
		x: startx + 15,
		y: starty + 30,
		size: 60,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 35,
		y: starty + 50,
		size: 10,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 65,
		y: starty + 50,
		size: 10,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 45,
		y: starty + 70,
		size: 10,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 70,
		size: 10,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 25,
		y: starty + 90,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 90,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 25,
		y: starty + 100,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 35,
		y: starty + 100,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 100,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 65,
		y: starty + 100,
		size: 10,
		color: '#484848',
	});
}

export function drawDino(gameCanvas, startx, starty) {
	drawSquare({
		canvas: gameCanvas,
		x: startx + 60,
		y: starty,
		size: 30,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 70,
		y: starty,
		size: 30,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 5,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 80,
		y: starty + 5,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 65,
		y: starty + 10,
		size: 5,
		color: '#F7F7F7',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 15,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 80,
		y: starty + 35,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 85,
		y: starty + 35,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 90,
		y: starty + 35,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx,
		y: starty + 40,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 50,
		y: starty + 40,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx,
		y: starty + 45,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 40,
		y: starty + 45,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 45,
		y: starty + 45,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx,
		y: starty + 50,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 30,
		y: starty + 50,
		size: 20,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 70,
		y: starty + 50,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 75,
		y: starty + 50,
		size: 5,
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
		x: startx + 25,
		y: starty + 55,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 75,
		y: starty + 55,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 15,
		y: starty + 60,
		size: 25,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 25,
		y: starty + 60,
		size: 30,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 5,
		y: starty + 70,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 10,
		y: starty + 70,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 70,
		size: 10,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 55,
		y: starty + 80,
		size: 5,
		color: '#484848',
	});
	drawSquare({
		canvas: gameCanvas,
		x: startx + 20,
		y: starty + 85,
		size: 5,
		color: '#484848',
	});
	if (leg_motion === 0) {
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 90,
			size: 10,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 35,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 45,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 95,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 100,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 100,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 30,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 55,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
	} else if (leg_motion === 1) {
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 90,
			size: 10,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 35,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 45,
			y: starty + 80,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 80,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 85,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 100,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 30,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 95,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 55,
			y: starty + 95,
			size: 5,
			color: '#484848',
		});
	} else if (leg_motion === 2) {
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 80,
			size: 10,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 35,
			y: starty + 80,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 45,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 85,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 95,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 90,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 100,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 25,
			y: starty + 95,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 30,
			y: starty + 95,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 50,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
		drawSquare({
			canvas: gameCanvas,
			x: startx + 55,
			y: starty + 105,
			size: 5,
			color: '#484848',
		});
	}
}
