document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate password strength (at least 6 characters)
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // If all validations pass
    alert('Registration successful!');
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    
   // Check if username is provided
   if (username === '') {
       alert('Please enter your username.');
       return;
   }

   // If all validations pass
   alert('Login successful!');
});
