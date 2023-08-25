const inputRange = document.querySelector('#font-size-control');
const targetText = document.querySelector('#text');
inputRange.addEventListener('input', onInputRange)
function onInputRange(evt) {
    targetText.style.fontSize = `${ evt.currentTarget.value }px`;
}