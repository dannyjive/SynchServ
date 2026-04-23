const hamburger = document.getElementById('hamburgerBtn');
const topTray = document.getElementById('topTray');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  hamburger.classList.toggle('active');
  topTray.classList.toggle('open');
  overlay.classList.toggle('active');
  
  // Prevent body scrolling when menu is open
  if (topTray.classList.contains('open')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// Close menu if a link is clicked
const links = document.querySelectorAll('.top-tray a');
links.forEach(link => {
  link.addEventListener('click', toggleMenu);
});