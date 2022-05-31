import { clearCanvas, createCanvas } from './utilities/canvas-utils.js';
import { creatureTypes, drawCreature, drawDino } from './creatures.js';
import { obstacleTypes, drawBox, drawCactus } from './obstacles.js';

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 800,
	heightPx: 400,
});

let i = 0;
let previousFrameTimestamp = 0;


const dinoRunSpeed = 300; // Pixels per second
const creatureType = creatureTypes.dino;
const obstacleType = obstacleTypes.cactus;
const startingx = 35;
const startingy = 230;
let objStartingx = 605;
const objStartingy = 230;

// 60 FPS = 16.67ms between frames
function renderScene(currentTimestamp = 0) {
	if (i >= 100) {
		return;
	}

	clearCanvas(gameCanvas);

	i += 1;

	// If msSinceLastFrame === 1000 (1s), how many pixels has the dino moved? => 100 (dinoRunSpeed)
	// Speed = Distance / time
	// Speed * time = (Distance / time) * time   (time cancels on RHS)
	// Speed * time = Distance
	// Distance = Speed * time
	const msSinceLastFrame = currentTimestamp - previousFrameTimestamp;
	const secondsSinceLastFrame = msSinceLastFrame / 1000;
	const distanceDinoHasMoved = dinoRunSpeed * secondsSinceLastFrame;
	const newObjectXCoord = objStartingx - distanceDinoHasMoved;
	objStartingx = newObjectXCoord;

	console.log('Current time of animation frame', currentTimestamp);
	console.log('Ms, s since last frame', msSinceLastFrame, secondsSinceLastFrame);
	console.log('Dino moved distance, new x coord', distanceDinoHasMoved, newObjectXCoord);
	console.log('************************************');

	if (creatureType === creatureTypes.creature) {
		// Test "Creature"
		drawCreature(gameCanvas, startingx, startingy);
	} else if (creatureType === creatureTypes.dino) {
		// Attempt at Dino
		drawDino(gameCanvas, startingx, startingy);
	}

	if (obstacleType === obstacleTypes.box) {
		drawBox(gameCanvas, newObjectXCoord, objStartingy);
	} else if (obstacleType === obstacleTypes.cactus) {
		drawCactus(gameCanvas, newObjectXCoord, objStartingy);
	}

	previousFrameTimestamp = currentTimestamp;
	requestAnimationFrame(renderScene);
}

renderScene();
