const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

function updateCounter() {
	valueSpan.textContent = counterValue;
}

incrementButton.addEventListener("click", () => {
	counterValue += 1;
	updateCounter();
});

decrementButton.addEventListener("click", () => {
	counterValue -= 1;
	updateCounter();
});

updateCounter();