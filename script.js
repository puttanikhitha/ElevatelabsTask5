const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

function validateEmail(email) {
  // Basic email regex pattern
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}

function countWords(str) {
  return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form from submitting

  // Clear previous errors and success message
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let valid = true;

  // Validate Name (non-empty)
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  // Validate Email (non-empty and format)
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Please enter your email.';
    valid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Validate Message (at least 5 words)
  const wordCount = countWords(messageInput.value);
  if (wordCount < 5) {
    messageError.textContent = 'Message must be at least 5 words.';
    valid = false;
  }

  // If all inputs are valid
  if (valid) {
    // Hide form
    form.style.display = 'none';
    // Show success message
    successMessage.textContent = 'Thank you! Your message has been received.';
  }
});
