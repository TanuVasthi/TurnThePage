document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('login-btn').addEventListener('click', function () {
        validateForm();
    });
});

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validate username
    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        alert('Username can only contain alphabets, numbers, and underscores.');
        return;
    }

    // Validate password
    var passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert('Password should be at least 8 characters long and contain at least one special character and one number.');
        return;
    }

    // If validation passes, you can proceed with the login logic
    alert('Login successful!');
}