document.addEventListener('DOMContentLoaded', function () {
  // Form Selection
  const form = document.getElementById('registration-form');

  // Feedback Division Selection
  const feedbackDiv = document.getElementById('form-feedback');

  // Form Submission Event Listener
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent actual form submission

    // Retrieve User Inputs and trim
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Initialize validation variables
    let isValid = true;
    const messages = [];

    // Username Validation: at least 3 characters
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation: must include '@' and '.'
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Please enter a valid email address (must include "@" and ".").');
    }

    // Password Validation: at least 8 characters
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Displaying Feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // green
      // Optionally reset the form if you want:
      form.reset();
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'; // red
    }
  });
});