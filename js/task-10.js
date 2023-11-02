const controlsDiv = document.getElementById("controls");
const boxesDiv = document.getElementById("boxes");

const input = controlsDiv.querySelector("input");
const createButton = controlsDiv.querySelector("[data-create]");
const destroyButton = controlsDiv.querySelector("[data-destroy]");

createButton.addEventListener("click", () => createBoxes(input.value));
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = Number(amount);
  let divs = '';
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
    divs += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }
  boxesDiv.insertAdjacentHTML("beforeend", divs);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
}