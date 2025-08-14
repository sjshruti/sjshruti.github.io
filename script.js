// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(isDark) {
  if (isDark) {
    body.classList.add('dark');
    themeToggle.textContent = '🌙';
  } else {
    body.classList.remove('dark');
    themeToggle.textContent = '☀️';
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Initial theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

// Toggle on click
themeToggle.addEventListener('click', () => {
  setTheme(!body.classList.contains('dark'));
});

// Contact form with email functionality
document.querySelector('.contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const submitButton = this.querySelector('button[type="submit"]');
  const originalText = submitButton.textContent;
  
  // Show loading state
  submitButton.textContent = 'Sending...';
  submitButton.disabled = true;
  
  // Get form data
  const formData = {
    name: this.querySelector('input[name="name"]').value,
    email: this.querySelector('input[name="email"]').value,
    message: this.querySelector('textarea[name="message"]').value
  };
  
  try {
    // Send to backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Success message
      alert('✅ ' + result.message);
      this.reset();
    } else {
      // Error message from server
      alert('❌ ' + result.message);
    }
    
  } catch (error) {
    console.error('Error sending message:', error);
    alert('❌ Failed to send message. Please check your internet connection and try again.');
  } finally {
    // Reset button state
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
});