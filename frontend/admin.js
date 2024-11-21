// frontend/admin.js

document.getElementById('adminLoginForm').onsubmit = function(event) {
  event.preventDefault();

  const adminUsername = document.getElementById('adminUsername').value;
  const adminPassword = document.getElementById('adminPassword').value;

  // Basic admin login validation (for example, comparing with hardcoded values)
  if (adminUsername === 'admin' && adminPassword === 'adminpassword') {
    alert('Admin login successful!');
    window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
  } else {
    alert('Invalid admin credentials');
  }
};
document.getElementById('createAssessment').onsubmit = function(event) {
  event.preventDefault();

  const assessmentName = document.getElementById('assessmentName').value;
  const question = document.getElementById('question').value;
  const options = document.getElementById('options').value.split(',');
  const correctAnswer = document.getElementById('correctAnswer').value;

  const newAssessment = {
    name: assessmentName,
    questions: [
      {
        question: question,
        options: options,
        correctAnswer: correctAnswer
      }
    ]
  };

  const assessmentList = document.getElementById('adminAssessmentList');
  const li = document.createElement('li');
  li.innerHTML = `${assessmentName} - <button onclick="viewAssessment('${assessmentName}')">View</button>`;
  assessmentList.appendChild(li);
};

function viewAssessment(name) {
  alert("Viewing assessment: " + name);
}
