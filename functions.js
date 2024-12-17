document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Toggle the SVG icons (sun and moon)
  const sunIcon = document.getElementById('sun-icon');
  const sunRays = document.getElementById('sun-rays');
  const moonIcon = document.getElementById('moon-icon');
  
  // Sun to Moon animation
  if (document.body.classList.contains('dark-mode')) {
    sunIcon.style.animation = 'toggle-sun-to-moon 0.5s forwards';
    sunRays.style.animation = 'toggle-sun-to-moon 0.5s forwards';
    moonIcon.style.animation = 'toggle-moon-to-sun 0.5s forwards';
  } else {
    sunIcon.style.animation = 'toggle-moon-to-sun 0.5s forwards';
    sunRays.style.animation = 'toggle-moon-to-sun 0.5s forwards';
    moonIcon.style.animation = 'toggle-sun-to-moon 0.5s forwards';
  }
});
