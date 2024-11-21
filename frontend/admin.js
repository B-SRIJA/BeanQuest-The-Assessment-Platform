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
