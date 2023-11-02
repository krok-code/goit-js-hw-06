const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
	const inputValue = nameInput.ariaValue;

	if (inputValue.trim() === "") {
		nameOutput.textContent = "Anonymous";
	} else {
		nameOutput.textContent = inputValue;
	}
});