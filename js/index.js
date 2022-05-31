import { createCanvas } from './utilities/canvas-utils.js';
import { creatureTypes, drawCreature, drawDino } from './creatures.js';
import { obstacleTypes, drawBox, drawCactus } from './obstacles.js';

// Can be const instead of var
const creatureType = creatureTypes.dino;
const obstacleType = obstacleTypes.cactus;
const startingx = 35
const startingy = 230
const objStartingx = 605
const objStartingy = 230

// enum, short for "enumeration"

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 800,
	heightPx: 400,
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
	drawBox(gameCanvas, objStartingx, objStartingy)
}
else if (obstacleType === obstacleTypes.cactus) {
	drawCactus(gameCanvas, objStartingx, objStartingy)
}
