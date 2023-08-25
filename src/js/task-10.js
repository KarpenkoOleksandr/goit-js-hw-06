function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector('[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

divBoxes.style.display = 'flex';
divBoxes.style.flexDirection = 'column';
divBoxes.style.alignItems = 'center';
divBoxes.style.padding = '20px';

createBtn.addEventListener('click', () => {
  if (
    Number(inputNum.value.trim()) > Number(inputNum.max) ||
    Number(inputNum.value.trim()) < Number(inputNum.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNum.value.trim());
  }
  inputNum.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNum.value = '';
  divBoxes.innerHTML = '';
}

function createBoxes(amount) {
  let size = 30;
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10 * i;
    const div = `<div class="item" style="display: block; margin-bottom: 10px; background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    boxesArray.push(div);
  }
  divBoxes.insertAdjacentHTML('beforeend', boxesArray.join(''));
}