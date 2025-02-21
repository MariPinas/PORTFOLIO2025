// Scroll suave entre as seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  document.getElementById('enter-site').addEventListener('click', function() {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.classList.add('hidden');
  });
  