document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorElement = document.getElementById('signup-error');

    if (name === '' || email === '' || password === '') {
        errorElement.textContent = 'All fields are required.';
        return;
    }

    if (!email.includes('@')) {
        errorElement.textContent = 'Invalid email address.';
        return;
    }

    errorElement.textContent = '';
    alert('Signup successful!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');

    if (email === '' || password === '') {
        errorElement.textContent = 'All fields are required.';
        return;
    }

    if (!email.includes('@')) {
        errorElement.textContent = 'Invalid email address.';
        return;
    }

    errorElement.textContent = '';
    alert('Login successful!');
});
document.getElementById('showSignUp').addEventListener('click', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.classList.remove('show');
    loginForm.classList.add('fade');
    setTimeout(() => {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        signupForm.classList.remove('fade');
        signupForm.classList.add('show');
    }, 500);

});

document.getElementById('showSignIn').addEventListener('click', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    signupForm.classList.remove('show');
    signupForm.classList.add('fade');
    setTimeout(() => {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        loginForm.classList.remove('fade');
        loginForm.classList.add('show');
    }, 500);
});

