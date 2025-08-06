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

// Contact form (demo only)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out, Shruti will get back to you soon!');
  this.reset();
});