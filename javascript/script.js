document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".menu-overlay");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      // Toggle the classes
      navLinks.classList.toggle("is-open");
      toggleBtn.classList.toggle("is-active");
      overlay.classList.toggle("is-active"); // Darkens the screen

      // Prevent body scroll
      const isOpen = navLinks.classList.contains("is-open");
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    });

    // OPTIONAL: Close the menu if the user clicks on the dark area
    overlay.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      toggleBtn.classList.remove("is-active");
      overlay.classList.remove("is-active");
      document.body.style.overflow = "auto";
    });
  }
});


// ---- GSAP for Services page

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".card").forEach((card) => {
  const bullets = card.querySelectorAll(".bullet");

  gsap.from(bullets, {
    y: 20,
    opacity: 0,
    duration: 0.5,
    stagger: {
      each: 0.12,
      from: "start",
    },
    ease: "power2.out",
    scrollTrigger: {
      trigger: card,
      start: "top 60%",
      toggleActions: "play none none none",
    },
  });
});
