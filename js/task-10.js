function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(input) {
  for (let i = 0; i < input.value; i += 1) {

    const styleLastElement = (divBoxes.lastElementChild !== null) ? divBoxes.lastElementChild.getAttribute('style') : 'not';
    const heightLastElement = (styleLastElement === 'not') ? 30 : Number.parseInt(styleLastElement.slice(7, styleLastElement.length)) + 10;
    const heightActual = (30 > heightLastElement) ? 30 : heightLastElement;
    
    const increaseDiv = heightActual + i * 10;
    const randomColor = getRandomHexColor();
    const markup = `<div style="height: ${increaseDiv}px; width: ${increaseDiv}px; background-color: ${randomColor}"></div>`;
    divBoxes.insertAdjacentHTML("beforeend", markup);
  };
};

function destroyBoxes() {
  divBoxes.textContent = '';
};

const amount = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

buttonCreate.addEventListener('click', () => {
  createBoxes(amount);
});

buttonDestroy.addEventListener('click', destroyBoxes);