document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.menu-overlay');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      // Toggle the classes
      navLinks.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active');
      overlay.classList.toggle('is-active'); // Darkens the screen
      
      // Prevent body scroll
      const isOpen = navLinks.classList.contains('is-open');
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    });

    // OPTIONAL: Close the menu if the user clicks on the dark area
    overlay.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      overlay.classList.remove('is-active');
      document.body.style.overflow = 'auto';
    });
  }
});