const buttonMinus = document.querySelector('#decrement');
buttonMinus.addEventListener("click", onClickDecrement);
const buttonPlus = document.querySelector('#increment');
buttonPlus.addEventListener("click", onClickIncrement);
const counterValue = document.querySelector('#value');
counterValue = 0;
function onClickDecrement(evt) {
    console.log('Its a click!');
}