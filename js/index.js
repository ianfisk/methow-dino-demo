import { createCanvas } from './utilities/canvas-utils.js';
import { creatureTypes, drawCreature, drawDino } from './creatures.js';

// Can be const instead of var
const creatureType = creatureTypes.dino;

// enum, short for "enumeration"

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 400,
	heightPx: 200,
});

if (creatureType === creatureTypes.creature) {
	// Test "Creature"
	drawCreature(gameCanvas); // TODO(noah): add starting x, y offset to draw from
} else if (creatureType === creatureTypes.dino) {
	// Attempt at Dino
	drawDino(gameCanvas);
}
