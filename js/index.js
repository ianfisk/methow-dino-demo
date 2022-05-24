import { createCanvas } from './utilities/canvas-utils.js';
import { creatureTypes, drawCreature, drawDino } from './creatures.js';
import { obstacleTypes, drawBox } from '.obstacles.js';

// Can be const instead of var
const creatureType = creatureTypes.dino;
const obstacleType = obstacleTypes.box;
const startingx = 35
const startingy = 30

// enum, short for "enumeration"

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 400,
	heightPx: 200,
});

if (creatureType === creatureTypes.creature) {
	// Test "Creature"
	drawCreature(gameCanvas, startingx, startingy); // TODO(noah): add starting x, y offset to draw from
} 
else if (creatureType === creatureTypes.dino) {
	// Attempt at Dino
	drawDino(gameCanvas, startingx, startingy);
}

if (obstacleType === obstacleTypes.box) {
	drawBox(gameCanvas, startingx, startingy)
}
