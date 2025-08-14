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
  
  const form = this;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;
  
  // Get form data
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message')
  };

  // Show loading state
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  try {
    // Send data to backend
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      // Success message
      showNotification(result.message, 'success');
      form.reset();
    } else {
      // Error message
      showNotification(result.message, 'error');
    }

  } catch (error) {
    console.error('Error:', error);
    showNotification('Failed to send message. Please try again later.', 'error');
  } finally {
    // Reset button state
    submitBtn.textContent = originalBtnText;
    submitBtn.disabled = false;
  }
});

// Notification system
function showNotification(message, type = 'info') {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => notification.remove());

  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    max-width: 400px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `;

  // Set background color based on type
  if (type === 'success') {
    notification.style.backgroundColor = '#28a745';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#dc3545';
  } else {
    notification.style.backgroundColor = '#17a2b8';
  }

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}