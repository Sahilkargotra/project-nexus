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
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('showSignIn').addEventListener('click', () => {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

