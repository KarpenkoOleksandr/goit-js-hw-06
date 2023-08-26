const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onLoginFormSubmit);
const userData = {};
function onLoginFormSubmit(evt) {
    evt.preventDefault();
    const input = evt.currentTarget.elements;
    const email = input.email;
    const password = input.password;
    if (email.value === '' || password.value === '') {
    return alert('All fields need to be filled!!!')
    }
    else {
        userData.email = email.value;
        userData.password = password.value;
        console.log(userData);
    }
    evt.currentTarget.reset();
}
