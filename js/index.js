import { clearCanvas, createCanvas } from './utilities/canvas-utils.js';
import { creatureTypes, drawCreature, drawDino, legMotionTypes } from './creatures.js';
import { obstacleTypes, drawBox, drawCactus } from './obstacles.js';
import { getRelativeJumpHeight } from './utilities/physics-utils.js';

const gameCanvas = createCanvas({
	parentElement: document.body,
	widthPx: 800,
	heightPx: 400,
});

// TODO: move these into a gameState object; each of these values
// would be a property of that object, and the gameState could be
// referenced where ever you need to know the speed of the dino or
// another value.
const DINO_RUN_SPEED = 300; // Pixels per second
const DINO_LEG_TOGGLE_FRAME_COUNT = 15; // Number of frames before toggling leg animation
const CREATURE_TYPE = creatureTypes.dino;
const OBSTACLE_TYPE = obstacleTypes.cactus;
const PLAYER_X = 35; // Screen origin is the upper-left corner.
const PLAYER_Y = 230;
const OBSTACLE_Y = 230;
const INITIAL_OBSTACLE_X = 1000;
const MIN_OBSTACLE_SPACING = 200;

let dinoJumpStartTime = -1;
let frameCount = 0;
let previousFrameTimestamp = 0;
let obstacleXCoords = getRandomObstacles(INITIAL_OBSTACLE_X);
document.body.addEventListener('keypress', (event) => {
	if (event.key === ' ') {
		dinoJumpStartTime = previousFrameTimestamp;
	}
});

// 60 FPS = 16.67ms between frames
function renderScene(currentTimestamp = 0) {
	frameCount = (frameCount + 1) % Number.MAX_SAFE_INTEGER;

	clearCanvas(gameCanvas);

	// If msSinceLastFrame === 1000 (1s), how many pixels has the dino moved? => 100 (DINO_RUN_SPEED)
	// Speed = Distance / time
	// Speed * time = (Distance / time) * time   (time cancels on RHS)
	// Speed * time = Distance
	// Distance = Speed * time
	const msSinceLastFrame = currentTimestamp - previousFrameTimestamp;
	const secondsSinceLastFrame = msSinceLastFrame / 1000;
	const distanceDinoHasMoved = DINO_RUN_SPEED * secondsSinceLastFrame;

	drawPlayer(frameCount, currentTimestamp);
	drawObstacles(distanceDinoHasMoved);

	previousFrameTimestamp = currentTimestamp;
	requestAnimationFrame(renderScene);
}

function drawPlayer(frameCount, currentTimestamp) {
	// This if statement combines integer division with modular arithmetic to toggle
	// the leg animation every DINO_LEG_TOGGLE_FRAME_COUNT frames in a dynamic way.
	// The % operator yields the integer remainder of division.
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
	// num % 2 will yield the remainder of dividing a number by 2, so
	// num % 2 === 0 when num is even
	// num % 2 === 1 when num is odd
	//
	// Math.floor() performs integer division, so the decimal part of the quotient is thrown out.
	// For example, 5/4 = 1.25, but Math.floor(5/4) = 1. Math.floor(9/4) = 2.
	//
	// So combining the two, the condition evaluates to 0 (false) the first DINO_LEG_TOGGLE_FRAME_COUNT frames,
	// then evaluates to 1 (true) the next DINO_LEG_TOGGLE_FRAME_COUNT frames,
	// then evaluates to 0 (false) the next DINO_LEG_TOGGLE_FRAME_COUNT frames, and so on.
	let legMotion;
	if (Math.floor(frameCount / DINO_LEG_TOGGLE_FRAME_COUNT) % 2) {
		legMotion = legMotionTypes.rightLegUpLeftLegDown;
	} else {
		legMotion = legMotionTypes.leftLegUpRightLegDown;
	}

	if (CREATURE_TYPE === creatureTypes.creature) {
		drawCreature(gameCanvas, PLAYER_X, PLAYER_Y);
	} else if (CREATURE_TYPE === creatureTypes.dino) {
		const dinoIsJumping = dinoJumpStartTime > 0;
		let heightOfJump = 0;
		if (dinoIsJumping) {
			heightOfJump = getRelativeJumpHeight(currentTimestamp - dinoJumpStartTime);

			// Reset dinoJumpStartTime if we are done jumping.
			if (heightOfJump === 0) {
				dinoJumpStartTime = -1;
			}
		}

		drawDino(gameCanvas, PLAYER_X, PLAYER_Y - heightOfJump, legMotion);
	}
}

function drawObstacles(distanceDinoHasMoved) {
	for (const obstacleCoord of obstacleXCoords) {
		const newObjectX = obstacleCoord.x - distanceDinoHasMoved;
		obstacleCoord.x = newObjectX;

		drawObstacle(newObjectX);
	}

	obstacleXCoords = obstacleXCoords.filter(({x}) => !isObstacleOffscreen(x));

	if (obstacleXCoords.length < 3) {
		const lastObstacle = obstacleXCoords[obstacleXCoords.length - 1];
		obstacleXCoords = [...obstacleXCoords, ...getRandomObstacles(lastObstacle.x)];
	}
}

function isObstacleOffscreen(xCoord) {
	return xCoord < -MIN_OBSTACLE_SPACING / 2;
}

function getRandomObstacleOffset() {
	return Math.floor(Math.random() * INITIAL_OBSTACLE_X, MIN_OBSTACLE_SPACING);
}

function getRandomObstacles(objectXOffset) {
	const obstacle1 = { x: objectXOffset + getRandomObstacleOffset() };
	const obstacle2 = { x: obstacle1.x + getRandomObstacleOffset() };
	const obstacle3 = { x: obstacle2.x + getRandomObstacleOffset() };
	return [obstacle1, obstacle2, obstacle3];
}

function drawObstacle(xCoord) {
	if (OBSTACLE_TYPE === obstacleTypes.box) {
		drawBox(gameCanvas, xCoord, OBSTACLE_Y);
	} else if (OBSTACLE_TYPE === obstacleTypes.cactus) {
		drawCactus(gameCanvas, xCoord, OBSTACLE_Y);
	}
}

renderScene();
