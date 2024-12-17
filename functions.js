const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check if dark mode is already enabled
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeIcon.classList.remove('bi-sun');
  themeIcon.classList.add('bi-moon');
}

// Toggle dark mode on button click
themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.remove('bi-sun');
    themeIcon.classList.add('bi-moon'); // Switch to moon icon in dark mode
  } else {
    localStorage.setItem('theme', 'light');
    themeIcon.classList.remove('bi-moon');
    themeIcon.classList.add('bi-sun'); // Switch back to sun icon in light mode
  }
});
