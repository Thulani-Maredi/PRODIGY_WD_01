// Code by Thulani Maredi  
// April 2025  
// Prodigy Task  


window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

