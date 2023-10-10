let email = document.querySelector('#mail');
let country = document.querySelector('#country');
let zipcode = document.querySelector('#zipcode');
let password = document.querySelector('#password');
let passwordConfirmation = document.querySelector('#password-confirmation');

email.addEventListener('input', (event)=>{
    if(email.validity.typeMismatch) {
        email.setCustomValidity('please input email correctly');
    } else {
        email.setCustomValidity('');
    }
})