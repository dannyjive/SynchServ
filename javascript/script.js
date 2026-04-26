document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const overlay = document.querySelector(".menu-overlay");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
      toggleBtn.classList.toggle("is-active");
      overlay.classList.toggle("is-active"); // Darkens the screen

      const isOpen = navLinks.classList.contains("is-open");
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    });

    // Close the menu if the user clicks on the dark area
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

// GSAP for Home page

document.addEventListener("DOMContentLoaded", () => {
  const phrases = document.querySelectorAll(".phrase");

  if (phrases.length > 0) {
    const tl = gsap.timeline({ repeat: -1 });

    gsap.set(phrases, { visibility: "visible" });

    phrases.forEach((phrase) => {
      tl.to(phrase, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(phrase, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: "power2.in",
        delay: 2 // Time visible
      });
    });
  }
});