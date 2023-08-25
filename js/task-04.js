const valueEl = document.getElementById('value');

const buttonMinus = document.querySelector('[data-action="decrement"]');
buttonMinus.addEventListener("click", onClickDecrement);

const buttonPlus = document.querySelector('[data-action="increment"]');
buttonPlus.addEventListener("click", onClickIncrement);

let counterValue = 0;

function onClickDecrement(evt) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onClickIncrement(evt) {
    counterValue += 1;
    valueEl.textContent = counterValue;
}