window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add('scrolled');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    hamburger.addEventListener('click', function() {
      // Toggle the active class on nav
      nav.classList.toggle('active');
    });
  });