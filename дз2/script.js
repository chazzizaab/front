document.addEventListener('DOMContentLoaded', function() {
  const fontBtn = document.querySelector('.font-switcher');
  const themeBtn = document.querySelector('.theme-switcher');
  const body = document.body;

  fontBtn.addEventListener('click', toggleFont);
  themeBtn.addEventListener('click', toggleTheme);

  function toggleFont() {
    body.style.fontFamily = getComputedStyle(body).fontFamily.includes('Comfortaa') 
      ? 'var(--font-alt)' 
      : 'var(--font-main)';
  }

  function toggleTheme() {
    body.classList.toggle('dark-theme');
  }
});
