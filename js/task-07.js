const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

const initialFontSize = fontSizeControl.value;
textSpan.style.fontSize = `${initialFontSize}px`;

fontSizeControl.addEventListener("input", () => {
	const fontSize = fontSizeControl.value;

	textSpan.style.fontSize = `${fontSize}px`;
});