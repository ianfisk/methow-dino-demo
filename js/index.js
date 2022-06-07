import { clearCanvas, createCanvas } from './utilities/canvas-utils.js';
import { creatureTypes, drawCreature, drawDino, legMotionTypes } from './creatures.js';
import { obstacleTypes, drawBox, drawCactus } from './obstacles.js';
import { getRelativeJumpHeight } from './utilities/physics-utils.js';

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 800,
	heightPx: 400,
});

let frameCount = 0;
let previousFrameTimestamp = 0;
let leg_motion = 0;


// TODO: move these into a gameState object; each of these values
// would be a property of that object, and the gameState could be
// referenced where ever you need to know the speed of the dino or
// another value.
const dinoRunSpeed = 300; // Pixels per second
const dinoLegToggleFrameCount = 15; // Number of frames before toggling leg animation
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
	frameCount += 1;

	// This if statement combines integer division with modular arithmetic to toggle
	// the leg animation every dinoLegToggleFrameCount frames in a dynamic way.
	// The % operator yields the integer remainder of division.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
	// num % 2 will yield the remainder of dividing a number by 2, so
	// num % 2 === 0 when num is even
	// num % 2 === 1 when num is odd
	//
	// Math.floor() performs integer division, so the decimal part of the quotient is thrown out.
	// For example, 5/4 = 1.25, but Math.floor(5/4) = 1. Math.floor(9/4) = 2.
	//
	// So combining the two, the condition evaluates to 0 (false) the first dinoLegToggleFrameCount frames,
	// then evaluates to 1 (true) the next dinoLegToggleFrameCount frames,
	// then evaluates to 0 (false) the next dinoLegToggleFrameCount frames, and so on.
	if (Math.floor(frameCount / dinoLegToggleFrameCount) % 2) {
		leg_motion = legMotionTypes.rightLegUpLeftLegDown;
	} else {
		leg_motion = legMotionTypes.leftLegUpRightLegDown;
	}

	clearCanvas(gameCanvas);

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
