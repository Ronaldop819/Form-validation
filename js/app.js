const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector('#password');
const confirmPasswordE1 = document.querySelector('#confirm-password');

const form = document.querySelector('#signup');


const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;

    const username = usernameE1.value.trim();

    if (!isRequired(username)) {
        showError(username, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(username, 'Username must be between ${min} and ${max} characters.');
    } else {
        showSucess(usernameE1);
    }

    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailE1.value.trim();

    if (!isRequired(email)) {
        showError(email, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailE1, 'Email is not valid.');
    } else {
        showSucess(emailE1);
        valid = true;
    }

    return valid;
};


const checkPassword = () => {
    let valid = false;
    const password = passwordE1.value.trim();

    if (!isRequired(password)) {
        showError(passwordE1, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordE1, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSucess(passwordE1);
        valid = true;
    }

    return valid;
};


const checkConfirmPassword = () => {
    let valid = false;

    const checkConfirmPassword = confirmPasswordE1.value.trim();
    const password = passwordE1.value.trim();

    if (!isRequired(password)) {
        showError(confirmPasswordE1, 'Please enter the password again.');
    } else if (password !== confirmPassword) {
        showError(confirmPasswordE1, 'Confirm password does not match.');
    } else {
        showSucess(confirmPasswordE1);
        valid = true;
    }

    return valid;
};



const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;



const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSucess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
};



form.addEventListener('submit', function (e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

    let isFormaValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;

        if (isFormaValid) {

        }
});












