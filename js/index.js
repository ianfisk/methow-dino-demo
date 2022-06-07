import { clearCanvas, createCanvas } from './utilities/canvas-utils.js';
import { creatureTypes, drawCreature, drawDino, legMotionTypes } from './creatures.js';
import { obstacleTypes, drawBox, drawCactus } from './obstacles.js';
import { getRelativeJumpHeight } from './utilities/physics-utils.js';

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 800,
	heightPx: 400,
});

let dino_animation_frame = 0;
let previousFrameTimestamp = 0;
let leg_motion = 0;


// TODO: move these into a gameState object; each of these values
// would be a property of that object, and the gameState could be
// referenced where ever you need to know the speed of the dino or
// another value.
const dinoRunSpeed = 300; // Pixels per second
const creatureType = creatureTypes.dino;
const obstacleType = obstacleTypes.cactus;
const startingx = 35;
const startingy = 230;
let objStartingx = 605;
const objStartingy = 230;

let dinoJumpStartTime = -1;

document.body.addEventListener('keypress', (event) => {
	if (event.key === ' ') {
		dinoJumpStartTime = previousFrameTimestamp;
	}
});

// 60 FPS = 16.67ms between frames
function renderScene(currentTimestamp = 0) {
	if (dino_animation_frame === 15) {
		leg_motion = legMotionTypes.rightLegUpLeftLegDown;
	} else if (dino_animation_frame === 30) {
		leg_motion = legMotionTypes.leftLegUpRightLegDown;
	}

	clearCanvas(gameCanvas);

	if (dino_animation_frame < 30) {
		dino_animation_frame += 1;
	} else if (dino_animation_frame === 30) {
		dino_animation_frame = 0;
	}

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
		const dinoIsJumping = dinoJumpStartTime > 0;
		let heightOfJump = 0;
		if (dinoIsJumping) {
			heightOfJump = getRelativeJumpHeight(currentTimestamp - dinoJumpStartTime);

			// Reset dinoJumpStartTime if we are done jumping.
			if (heightOfJump === 0) {
				dinoJumpStartTime = -1;
			}
		}

		drawDino(gameCanvas, startingx, startingy - heightOfJump, leg_motion);
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
