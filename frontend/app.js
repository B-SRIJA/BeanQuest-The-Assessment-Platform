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
document.getElementById('assessmentForm').onsubmit = function(event) {
  event.preventDefault();
  const answer = document.querySelector('input[name="q1"]:checked').value;
  
  const result = (answer === '4') ? 'Correct' : 'Incorrect';
  alert("Your answer is: " + result);

  // Show results to the user
  document.getElementById('assessmentPage').innerHTML = `<h2>Test Completed</h2><p>Your answer: ${result}</p>`;
};
let timeLeft = 60;
const timerElement = document.getElementById('timeLeft');

function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    timerElement.innerText = timeLeft;
  } else {
    clearInterval(timerInterval);
    alert('Time is up! Please submit your answers.');
  }
}

const timerInterval = setInterval(countdown, 1000);
