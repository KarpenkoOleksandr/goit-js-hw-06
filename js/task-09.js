function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const spanColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
changeColorButton.addEventListener('click', onChangeBgColor);
function onChangeBgColor() {
  spanColor.textContent = getRandomHexColor();
  body.style.backgroundColor = spanColor.textContent;
};