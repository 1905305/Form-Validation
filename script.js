const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const CPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs(); // This is your validation function
});

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = CPassword.value.trim(); // Fixed CPassword reference

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue === '') {  // Fixed `=====` to `===`
        setError(CPassword, 'Please confirm your password');
    } else if (confirmPasswordValue !== passwordValue) {  // Fixed logic comparison
        setError(CPassword, 'Passwords do not match'); // Was mistakenly setting password’s error
    } else {
        setSuccess(CPassword);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

// Optional: remove or fix this duplicate/unused function
const setSucess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');  // Fixed typo from 'sucesss'
    inputControl.classList.remove('error');
};


