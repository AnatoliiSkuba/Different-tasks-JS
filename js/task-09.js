function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const textBackgroundColor = document.querySelector('.color');
const buttonChangeColor = document.querySelector('.change-color');

buttonChangeColor.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  textBackgroundColor.textContent = currentColor;
 });

