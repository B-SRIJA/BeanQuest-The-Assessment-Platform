// frontend/app.js

document.getElementById('loginForm').onsubmit = function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Basic login validation (for example, comparing with hardcoded values)
  if (username === 'user' && password === 'password') {
    alert('Login successful!');
    window.location.href = 'dashboard.html'; // Redirect to user dashboard
  } else {
    alert('Invalid credentials');
  }
};
