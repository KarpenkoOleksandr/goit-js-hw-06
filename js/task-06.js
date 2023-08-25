const input = document.querySelector('#validation-input');
input.addEventListener('blur', onBlur);

function onBlur(evt) {
    const event = evt.currentTarget;
    const inputDataLength = Number(event.dataset.length);
    // console.log(inputDataLength);
    const inputValueLength = Number(event.value.trim().length);
    // console.log(inputValueLength);
    if (inputValueLength === inputDataLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}