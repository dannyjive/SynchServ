document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      // Toggle the tray
      navLinks.classList.toggle('is-open');
      
      // Toggle the hamburger animation
      toggleBtn.classList.toggle('is-active');
      
      // Prevent body scroll when menu is open
      const isOpen = navLinks.classList.contains('is-open');
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    });
  }
});