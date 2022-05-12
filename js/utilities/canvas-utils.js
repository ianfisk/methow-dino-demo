export function createCanvas({ parentElement, widthPx, heightPx }) {
	const canvas = document.createElement('canvas');
	canvas.width = widthPx;
	canvas.height = heightPx;
	canvas.style = "border: 1px solid black";

	parentElement.appendChild(canvas);

	return canvas;
}
