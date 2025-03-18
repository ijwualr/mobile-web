document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const body = document.querySelector("body"); // Select the body element
  
    // Toggle the 'active' class to show or hide the menu
    hamburger.addEventListener("click", function() {
      nav.classList.toggle("active");
      body.classList.toggle("nav-open"); // Add or remove a class to the body
    });
  });
  
  window.addEventListener('scroll', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        el.classList.add('scrolled');
      }
    });
  });