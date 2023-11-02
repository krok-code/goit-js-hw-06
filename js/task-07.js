const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("inut", () => {
	const fontSize = fontSizeControl.value;

	textSpan.style.fontSize = `${fontSize}px`;
});